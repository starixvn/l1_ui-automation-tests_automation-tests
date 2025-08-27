const fs = require("fs-extra");
const path = require("path");

const copyAndRenameFolder = async (clonegame, gamename, gameid) => {
  try {
    const newgamename = gamename.toLowerCase();
    const rootFolder = "tests\\games";

    // Find the folder with the root value
    const folderNames = await fs.readdir(rootFolder);
    const foundFolder = folderNames.find((folderName) =>
      folderName.includes(clonegame)
    );

    if (!foundFolder) {
      console.log("Source folder not found");
      return;
    }

    // Extract the game name from the source folder (remove the ID prefix)
    const clonegameName = foundFolder.replace(/^\d+-/, "");
    console.log(`Cloning from: ${foundFolder} (game name: ${clonegameName})`);

    const sourceFolder = `${rootFolder}/${foundFolder}`;
    const copiedFolder = `${rootFolder}/${gameid}-${newgamename}`;
    const copiedsmokeFolder = `${rootFolder}/${gameid}-${newgamename}/smoke-tests`;
    const copiede2eFolder = `${rootFolder}/${gameid}-${newgamename}/e2e-tests`;

    // Create the new folder
    if (fs.existsSync(copiedFolder)) {
      await fs.remove(copiedFolder);
    }
    await fs.mkdir(copiedFolder);

    // Copy the source folder and its contents
    await fs.copy(sourceFolder, copiedFolder);
    console.log(`Copied folder to: ${copiedFolder}`);

    // Get the content of the new folder
    const newFolderContent = await fs.readdir(copiedFolder);

    // First, perform text replacement in all files
    console.log("Performing text replacement...");
    await findAndReplaceTextContent(copiedFolder, clonegameName, gamename);

    // Also replace the old game ID with the new one
    await findAndReplaceTextContent(copiedFolder, "id: 139", `id: ${gameid}`);

    // Replace any remaining references to the old game name in various formats
    await findAndReplaceTextContent(
      copiedFolder,
      clonegameName.replace(/-/g, ""),
      gamename.replace(/-/g, "")
    );

    await findAndReplaceTextContent(
      copiedFolder,
      clonegameName.toLowerCase(),
      gamename.toLowerCase()
    );

    // Rename files in the main folder
    console.log("Renaming files in main folder...");
    for (const item of newFolderContent) {
      if (item.includes(clonegameName)) {
        const oldPath = `${copiedFolder}/${item}`;
        const newPath = oldPath.replace(clonegameName, gamename);
        await fs.rename(oldPath, newPath);
        console.log(
          `Renamed: ${item} → ${item.replace(clonegameName, gamename)}`
        );
      }
    }

    // Handle smoke-tests subfolder
    if (fs.existsSync(copiedsmokeFolder)) {
      console.log("Processing smoke-tests folder...");
      const newSmokeContent = await fs.readdir(copiedsmokeFolder);

      // Rename files in smoke-tests
      for (const item of newSmokeContent) {
        if (item.includes(clonegameName)) {
          const oldPath = `${copiedsmokeFolder}/${item}`;
          const newPath = oldPath.replace(clonegameName, gamename);
          await fs.rename(oldPath, newPath);
          console.log(
            `Renamed smoke test: ${item} → ${item.replace(clonegameName, gamename)}`
          );
        }
      }

      // Additional text replacement in smoke-tests
      await findAndReplaceTextContent(
        copiedsmokeFolder,
        clonegameName,
        gamename
      );

      await findAndReplaceTextContent(
        copiedsmokeFolder,
        clonegameName.replace(/-/g, ""),
        gamename.replace(/-/g, "")
      );

      await findAndReplaceTextContent(
        copiedsmokeFolder,
        clonegameName.toLowerCase(),
        gamename.toLowerCase()
      );
    }

    // Handle e2e-tests subfolder
    if (fs.existsSync(copiede2eFolder)) {
      console.log("Processing e2e-tests folder...");
      const newE2eContent = await fs.readdir(copiede2eFolder);

      // Rename files in e2e-tests
      for (const item of newE2eContent) {
        if (item.includes(clonegameName)) {
          const oldPath = `${copiede2eFolder}/${item}`;
          const newPath = oldPath.replace(clonegameName, gamename);
          await fs.rename(oldPath, newPath);
          console.log(
            `Renamed e2e test: ${item} → ${item.replace(clonegameName, gamename)}`
          );
        }
      }

      // Additional text replacement in e2e-tests
      await findAndReplaceTextContent(copiede2eFolder, clonegameName, gamename);

      await findAndReplaceTextContent(
        copiede2eFolder,
        clonegameName.replace(/-/g, ""),
        gamename.replace(/-/g, "")
      );

      await findAndReplaceTextContent(
        copiede2eFolder,
        clonegameName.toLowerCase(),
        gamename.toLowerCase()
      );
    }

    console.log(
      `✅ Game ${gamename} (ID: ${gameid}) cloned successfully from ${clonegameName}`
    );
    console.log(`📁 New folder: ${copiedFolder}`);
  } catch (error) {
    console.log("❌ An error occurred:", error);
  }
};

const findAndReplaceTextContent = async (
  directory,
  searchText,
  replaceText
) => {
  try {
    // Read the contents of the directory
    const fileNames = await fs.readdir(directory);

    // Iterate over all files in the directory
    for (const fileName of fileNames) {
      const filePath = path.join(directory, fileName);
      const isFile = fs.statSync(filePath).isFile();

      if (isFile) {
        // Read the content of the file
        let content = await fs.readFile(filePath, "utf-8");
        let originalContent = content;

        // Replace the search text with the replace text in the file content
        content = content.replace(new RegExp(searchText, "gi"), replaceText);

        // Only write if content actually changed
        if (content !== originalContent) {
          await fs.writeFile(filePath, content, "utf-8");
          console.log(`Updated content in: ${fileName}`);
        }
      }
    }
  } catch (error) {
    console.log(`Error processing directory ${directory}:`, error);
  }
};

// Usage
const clonegameid = process.env.npm_config_clonegameid;
const gamename = process.env.npm_config_gamename;
const gameid = process.env.npm_config_gameid;

if (!clonegameid || !gamename || !gameid) {
  console.log("❌ Missing required parameters:");
  console.log("  --clonegameid: ID of the game to clone from");
  console.log("  --gamename: Name of the new game");
  console.log("  --gameid: ID of the new game");
  console.log("");
  console.log(
    "Example: npm run clonegame --clonegameid=139 --gamename=vivafiesta --gameid=140"
  );
  process.exit(1);
}

console.log(`🚀 Starting game clone process...`);
console.log(`📋 Parameters:`);
console.log(`   Clone from: ${clonegameid}`);
console.log(`   New game name: ${gamename}`);
console.log(`   New game ID: ${gameid}`);
console.log("");

copyAndRenameFolder(clonegameid, gamename, gameid);
