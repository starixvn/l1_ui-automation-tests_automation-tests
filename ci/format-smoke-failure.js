/* eslint-disable */
const fs = require("fs");
const path = require("path");

function findReportJson(providedPath) {
  const candidates = [
    providedPath,
    path.resolve("tests/test-results/report.json"),
    path.resolve("test-results/report.json"),
  ].filter(Boolean);
  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  return "";
}

function stripAnsi(input) {
  return String(input || "").replace(/\x1B\[[0-9;]*m/g, "");
}

function firstLine(input) {
  return stripAnsi(String(input || ""))
    .split("\n")[0]
    .trim();
}

function extractSuiteTitle(root) {
  let suiteTitle = "";
  function visit(node, currentTitle = "") {
    if (!node || suiteTitle) return;
    if (Array.isArray(node)) {
      for (const child of node) {
        if (suiteTitle) break;
        visit(child, currentTitle);
      }
      return;
    }
    let nextTitle = currentTitle;
    if (node.title && (node.suites || node.specs)) nextTitle = node.title;
    if (node.tests) {
      for (const test of node.tests) {
        if (suiteTitle) break;
        const status = test.status || test.outcome;
        if (
          status === "failed" ||
          status === "unexpected" ||
          status === "timedOut"
        ) {
          suiteTitle = nextTitle || node.title || "Smoke Tests";
          break;
        }
      }
    }
    visit(node.suites, nextTitle);
    visit(node.specs, nextTitle);
  }
  visit(root);
  return suiteTitle || "Smoke Tests";
}

function extractReason(root) {
  const isBeforeAll = (s) =>
    /beforeAll"?\s*hook\s*timeout/i.test(String(s || ""));
  const isLoginMemberSite = (s) =>
    /login\s+member\s+site\s+failed/i.test(String(s || ""));
  const isNetworkOrCert = (s) =>
    /net::ERR_|ERR_CERT_|ERR_NETWORK/i.test(String(s || ""));
  let reason = "";
  function visit(node) {
    if (!node || reason) return;
    if (Array.isArray(node)) {
      for (const child of node) {
        if (reason) break;
        visit(child);
      }
      return;
    }
    if (node.tests) {
      for (const test of node.tests) {
        if (reason) break;
        const status = test.status || test.outcome;
        if (
          status === "failed" ||
          status === "unexpected" ||
          status === "timedOut"
        ) {
          const result = (test.results && test.results[0]) || {};
          const steps = Array.isArray(result.steps) ? result.steps : [];
          const stepWithError = steps.find((s) => s && s.error && s.title);
          if (stepWithError) {
            reason = firstLine(stepWithError.title);
          } else if (steps.length > 0 && steps[steps.length - 1].title) {
            reason = firstLine(steps[steps.length - 1].title);
          } else {
            const candidates = [];
            if (Array.isArray(result.errors)) {
              for (const e of result.errors) {
                if (e && e.message)
                  candidates.push(
                    firstLine(e.message).replace(/^Error:\s*/i, "")
                  );
              }
            }
            if (result.error && result.error.message)
              candidates.push(
                firstLine(result.error.message).replace(/^Error:\s*/i, "")
              );
            if (Array.isArray(result.stdout)) {
              for (const o of result.stdout) {
                const txt = firstLine(o && o.text);
                if (/Timeout reached/i.test(txt) || /Reason:/i.test(txt))
                  candidates.push(txt);
              }
            }
            reason =
              candidates.find((c) => c && !isBeforeAll(c)) ||
              candidates[0] ||
              firstLine((result.error && result.error.stack) || "Failed");
          }
          break;
        }
      }
    }
    visit(node.suites);
    visit(node.specs);
  }
  visit(root);
  if (isBeforeAll(reason))
    return { icon: "⚠️", reason: "Login Failed Member Site" };
  if (isLoginMemberSite(reason) || isNetworkOrCert(reason))
    return { icon: "⚠️", reason: reason || "Failed" };
  return { icon: "❌", reason: reason || "Failed" };
}

function main() {
  const provided = process.argv[2];
  const jsonPath = findReportJson(provided);
  if (!jsonPath) {
    console.log("");
    return;
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const suiteTitle = extractSuiteTitle(data);
  // If the suiteTitle still looks like a file path (contains '/' and ends with .spec.ts), try to use the immediate child suite title
  let finalTitle = suiteTitle;
  if (/\.spec\.ts$/i.test(finalTitle)) {
    try {
      const topSuites = Array.isArray(data.suites) ? data.suites : [];
      const first = topSuites[0] || {};
      const child =
        (Array.isArray(first.suites) ? first.suites[0] : null) || {};
      if (child && typeof child.title === "string" && child.title.trim()) {
        finalTitle = child.title.trim();
      }
    } catch (_) {}
  }
  const { icon, reason } = extractReason(data);
  const pipelineUrl = process.env.CI_PIPELINE_URL || "";
  const pipelineId = process.env.CI_PIPELINE_ID || "";
  const message = `${icon}- ${finalTitle} - Reason: ${reason} -  Pipeline: ${pipelineUrl} (#${pipelineId})`;
  console.log(message);
}

try {
  main();
} catch (err) {
  console.log("");
}
