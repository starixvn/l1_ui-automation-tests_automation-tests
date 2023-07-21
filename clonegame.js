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
    const clonegameName = foundFolder.replace(/^\d+-/, "");
    if (!foundFolder) {
      console.log("Source folder not found");
      return;
    }

    const sourceFolder = `${rootFolder}/${foundFolder}`;
    const copiedFolder = `${rootFolder}/${gameid}-${newgamename}`;
    const copiedsmokeFolder = `${rootFolder}/${gameid}-${newgamename}/smoke-tests`;
    const copiede2eFolder = `${rootFolder}/${gameid}-${newgamename}/e2e-tests`;

    // Create the new folder
    if (fs.existsSync(copiedFolder)) {
      await fs.remove(copiedFolder);
    }
    await fs.mkdir(copiedFolder);

    // Copy and rename the source folder and its contents
    await fs.copy(sourceFolder, copiedFolder);

    const newFolderContent = await fs.readdir(copiedFolder);

    await findAndReplaceTextContent(
      copiedFolder,
      clonegameName.replace("-", ""),
      gamename
    );

    // Rename each item in the new folder
    for (const item of newFolderContent) {
      if (item.includes(clonegameName)) {
        const oldPath = `${copiedFolder}/${item}`;
        const newPath = oldPath.replace(clonegameName, newgamename);
        await fs.rename(oldPath, newPath);
      }
    }
    //subfolder smoke
    if (fs.existsSync(copiedsmokeFolder)) {
      const newsSmokeContent = await fs.readdir(copiedsmokeFolder);
      for (const item of newsSmokeContent) {
        if (item.includes(clonegameName)) {
          const oldPath = `${copiedsmokeFolder}/${item}`;
          const newPath = oldPath.replace(clonegameName, newgamename);
          await fs.rename(oldPath, newPath);
        }
      }
      await findAndReplaceTextContent(
        copiedsmokeFolder,
        clonegameName.replace("-", ""),
        gamename.replace("-", "")
      );
      await findAndReplaceTextContent(
        copiedsmokeFolder,
        clonegameName.toLowerCase(),
        gamename.replace("-", "").toLowerCase()
      );
    }

    //subfolder e2e
    if (fs.existsSync(copiede2eFolder)) {
      const newse2eContent = await fs.readdir(copiede2eFolder);
      for (const item of newse2eContent) {
        if (item.includes(clonegameName)) {
          const oldPath = `${copiede2eFolder}/${item}`;
          const newPath = oldPath.replace(clonegameName, newgamename);
          await fs.rename(oldPath, newPath);
        }
      }
      await findAndReplaceTextContent(
        copiede2eFolder,
        clonegameName.replace("-", ""),
        gamename.replace("-", "")
      );
      await findAndReplaceTextContent(
        copiede2eFolder,
        clonegameName.toLowerCase(),
        newgamename.replace("-", "").toLowerCase()
      );
    }

    console.log("Folder copied and renamed successfully");
  } catch (error) {
    console.log("An error occurred:", error);
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

        // Replace the search text with the replace text in the file content
        content = content.replace(new RegExp(searchText, "gi"), replaceText);

        // Write the modified content back to the file
        await fs.writeFile(filePath, content, "utf-8");
      }
    }
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

// Usage
copyAndRenameFolder(
  process.env.npm_config_clonegameid,
  process.env.npm_config_gamename,
  process.env.npm_config_gameid
);
