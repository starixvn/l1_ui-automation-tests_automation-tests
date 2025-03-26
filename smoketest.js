const { exec } = require("child_process");
const gameIds = [
1, 2, 3, 4, 6, 7, 8, 9, 10, 21,
   22, 23, 24, 25, 26, 27, 28, 29, 31, 35, 38,
39, 42, 43, 45, 46, 47, 48, 49, 50, 52, 59, 60, 61, 62, 63, 64, 66, 67, 68,
69, 70, 71, 72, 73, 74, 75, 76, 77, 79,
 80, 81, 82, 83, 84, 85, 86, 87, 88,
  89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 100, 101, 102, 103, 106, 107, 109,
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

const runCommand = (gameId) => {
  console.log(`Running command for game ID ${gameId}`);
  const command = `npm run test:smoke --env=prod --project=l2 --gameid=${gameId}`;

  currentConcurrentCommands++; // Increment the counter
  exec(command, (error, stdout, stderr) => {
    currentConcurrentCommands--; // Decrement the counter when done
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

gameIds.forEach((gameId) => {
  commandQueue.push(gameId); // Add game ID to the queue
  runNextCommand(); // Attempt to run the next command
});
