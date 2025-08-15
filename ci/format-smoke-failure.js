/* eslint-disable */
const fs = require("fs");
const path = require("path");

// Constants for better maintainability
const STATUS_FAILED = ["failed", "unexpected", "timedOut"];
const DEFAULT_TITLE = "Smoke Tests";
const ERROR_PREFIX = "Error: ";
const TIMEOUT_PATTERNS = ["Timeout reached", "Reason:"];
const BEFORE_ALL_PATTERN = /beforeAll"?\s*hook\s*timeout/i;
const LOGIN_MEMBER_SITE_PATTERN = /login\s+member\s+site\s+failed/i;
const NETWORK_CERT_PATTERN = /net::ERR_|ERR_CERT_|ERR_NETWORK/i;
const SPEC_FILE_PATTERN = /\.spec\.ts$/i;

function findReportJson(providedPath) {
  const candidates = [
    providedPath,
    path.resolve("tests/test-results/report.json"),
    path.resolve("test-results/report.json"),
  ].filter(Boolean);

  return candidates.find((p) => p && fs.existsSync(p)) || "";
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
    if (node.title && (node.suites || node.specs)) {
      nextTitle = node.title;
    }

    if (node.tests) {
      for (const test of node.tests) {
        if (suiteTitle) break;
        const status = test.status || test.outcome;
        if (STATUS_FAILED.includes(status)) {
          suiteTitle = nextTitle || node.title || DEFAULT_TITLE;
          break;
        }
      }
    }

    visit(node.suites, nextTitle);
    visit(node.specs, nextTitle);
  }

  visit(root);
  return suiteTitle || DEFAULT_TITLE;
}

function extractReason(root) {
  let reason = "";
  let testTitle = "";
  let specTitle = "";

  function visit(node) {
    if (!node || reason) return;

    if (Array.isArray(node)) {
      for (const child of node) {
        if (reason) break;
        visit(child);
      }
      return;
    }

    // Check if this is a spec with title and tests
    if (node.title && node.tests && !node.suites) {
      specTitle = node.title;
    }

    if (node.tests) {
      for (const test of node.tests) {
        if (reason) break;
        const status = test.status || test.outcome;
        if (STATUS_FAILED.includes(status)) {
          testTitle = test.title || "";
          reason = extractTestReason(test);
          break;
        }
      }
    }

    visit(node.suites);
    visit(node.specs);
  }

  visit(root);

  // Use spec title if test title is not available
  const finalTitle = testTitle || specTitle;

  // Combine test title with reason
  const combinedReason =
    finalTitle && reason ? `${finalTitle}: ${reason}` : reason || "Failed";

  // Check for special cases
  if (
    BEFORE_ALL_PATTERN.test(reason) ||
    LOGIN_MEMBER_SITE_PATTERN.test(reason) ||
    NETWORK_CERT_PATTERN.test(reason)
  ) {
    return { icon: "⚠️", reason: "Member Site Login Failed" };
  }

  return { icon: "❌", reason: combinedReason };
}

function extractTestReason(test) {
  const result = (test.results && test.results[0]) || {};
  const steps = Array.isArray(result.steps) ? result.steps : [];

  // Try to find step with error first
  const stepWithError = steps.find((s) => s && s.error && s.title);
  if (stepWithError) {
    return firstLine(stepWithError.title);
  }

  // Try last step if available
  if (steps.length > 0 && steps[steps.length - 1].title) {
    return firstLine(steps[steps.length - 1].title);
  }

  // Collect error candidates
  const candidates = [];

  // Check errors array
  if (Array.isArray(result.errors)) {
    for (const e of result.errors) {
      if (e && e.message) {
        candidates.push(firstLine(e.message).replace(ERROR_PREFIX, ""));
      }
    }
  }

  // Check single error
  if (result.error && result.error.message) {
    const errorMsg = firstLine(result.error.message).replace(ERROR_PREFIX, "");
    candidates.push(errorMsg);
  }

  // Check stdout for timeout/reason messages
  if (Array.isArray(result.stdout)) {
    for (const o of result.stdout) {
      const txt = firstLine(o && o.text);
      if (TIMEOUT_PATTERNS.some((pattern) => txt.includes(pattern))) {
        candidates.push(txt);
      }
    }
  }

  // Return first non-beforeAll candidate or fallback
  return (
    candidates.find((c) => c && !BEFORE_ALL_PATTERN.test(c)) ||
    candidates[0] ||
    firstLine((result.error && result.error.stack) || "Failed")
  );
}

function getChildSuiteTitle(data) {
  try {
    const topSuites = Array.isArray(data.suites) ? data.suites : [];
    const first = topSuites[0] || {};
    const child = (Array.isArray(first.suites) ? first.suites[0] : null) || {};

    if (child && typeof child.title === "string" && child.title.trim()) {
      return child.title.trim();
    }
  } catch (_) {
    // Ignore errors and return undefined
  }
  return undefined;
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

  // If the suiteTitle looks like a file path, try to use the immediate child suite title
  let finalTitle = suiteTitle;
  if (SPEC_FILE_PATTERN.test(finalTitle)) {
    const childTitle = getChildSuiteTitle(data);
    if (childTitle) {
      finalTitle = childTitle;
    }
  }

  const { icon, reason } = extractReason(data);
  const pipelineUrl = process.env.CI_PIPELINE_URL || "";

  const message = pipelineUrl
    ? `${icon} ${finalTitle} - Reason: ${reason} -  [Link](${pipelineUrl})`
    : `${icon} ${finalTitle} - Reason: ${reason}`;

  console.log(message);
}

// Main execution with error handling
try {
  main();
} catch (err) {
  console.log("");
}
