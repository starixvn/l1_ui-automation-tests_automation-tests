const { exec } = require("child_process");
const gameIds = [
  3,
  10,
  ,
  100,
  101,
  102,
  104,
  106,
  109,
  117,
  122,
  124,
  24,
  25,
  27,
  29,
  31,
  42,
  43,
  46,
  47,
  49,
  50,
  52,
  59,
  60,
  61,
  62,
  63,
  64,
  68,
  69,
  7,
  72,
  73,
  75,
  78,
  80,
  83,
  86,
  89,
  91,
  94,
  96,
  97,
  // 1, 2, 3, 4, 6, 7, 8, 9, 10, 21,
  //    22, 23, 24, 25, 26, 27, 28, 29, 31, 35, 38,
  // 39, 42, 43, 45, 46, 47, 48, 49, 50, 52, 59, 60, 61, 62, 63, 64, 66, 67, 68,
  // 69, 70, 71, 72, 73, 74, 75, 76, 77, 79,
  //  80, 81, 82, 83, 84, 85, 86, 87, 88,
  //   89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 100, 101, 102, 103, 106, 107, 109,
];

// Get game IDs from command line arguments
// const gameIds = process.argv
//   .slice(2)
//   .map(Number)
//   .filter((id) => !isNaN(id));

// if (gameIds.length === 0) {
//   console.error("Please provide valid game IDs as arguments.");
//   process.exit(1);
// }

const MAX_CONCURRENT_COMMANDS = 2; // Maximum number of concurrent commands
let currentConcurrentCommands = 0; // Counter for currently running commands

// Results tracking
const results = {
  passed: [],
  failed: [],
  total: 0,
};

const getCurrentTimestamp = () => {
  return new Date().toISOString().replace("T", " ").replace("Z", "");
};

const logResult = (gameId, status, details = "") => {
  const timestamp = getCurrentTimestamp();
  const statusMsg =
    status === "PASSED" ? "\x1b[32mPASSED\x1b[0m" : "\x1b[31mFAILED\x1b[0m";
  console.log(
    `[${timestamp}] Game ID ${gameId}: ${statusMsg}${details ? " - " + details : ""}`
  );
};

const runCommand = (gameId) => {
  const timestamp = getCurrentTimestamp();
  console.log(`[${timestamp}] Starting command for game ID ${gameId}`);
  const command = `npm run test:smoke --env=prod --project=l1 --gameid=${gameId}`;

  currentConcurrentCommands++; // Increment the counter

  exec(command, (error, stdout, stderr) => {
    currentConcurrentCommands--; // Decrement the counter when done
    results.total++;

    if (error) {
      // Command failed
      results.failed.push(gameId);
      logResult(gameId, "FAILED", error.message);

      // Log stderr if available
      if (stderr) {
        console.log(
          `[${getCurrentTimestamp()}] Game ID ${gameId} stderr: ${stderr}`
        );
      }
    } else {
      // Command passed
      results.passed.push(gameId);
      logResult(gameId, "PASSED");
    }

    // Log summary when all commands are complete
    if (results.total === gameIds.length) {
      logFinalSummary();
    }

    runNextCommand();
  });
};

const commandQueue = []; // Queue to hold commands

const runNextCommand = () => {
  if (
    commandQueue.length > 0 &&
    currentConcurrentCommands < MAX_CONCURRENT_COMMANDS
  ) {
    const nextGameId = commandQueue.shift(); // Get the next game ID from the queue
    runCommand(nextGameId); // Run the command
  }
};

const logFinalSummary = () => {
  const timestamp = getCurrentTimestamp();
  console.log(
    `\n[${timestamp}] ================ FINAL SUMMARY ================`
  );
  console.log(`Total tests run: ${results.total}`);
  console.log(`\x1b[32mPassed: ${results.passed.length}\x1b[0m`);
  console.log(`\x1b[31mFailed: ${results.failed.length}\x1b[0m`);

  if (results.passed.length > 0) {
    console.log(
      `\nPassed game IDs: ${results.passed.sort((a, b) => a - b).join(", ")}`
    );
  }

  if (results.failed.length > 0) {
    console.log(
      `\nFailed game IDs: ${results.failed.sort((a, b) => a - b).join(", ")}`
    );
  }

  console.log(`================================================\n`);
};

gameIds.forEach((gameId) => {
  commandQueue.push(gameId); // Add game ID to the queue
  runNextCommand(); // Attempt to run the next command
});
