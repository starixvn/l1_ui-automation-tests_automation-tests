import { Components } from "sc-automation-core";

let DragonTigerFightLocators = Components.TableLocator.TableLocators;

const tabGames = { x: 538, y: 85, width: 100, height: 30 };
const icoGame = { y: 200 };

DragonTigerFightLocators.forEach((item, i) => {
  if (item.name == "tabGames") {
    item.x = tabGames.x;
    item.y = tabGames.y;
    item.width = tabGames.width;
    item.height = tabGames.height;
  }
  if (item.name == "icoGame") {
    item.y = icoGame.y;
  }
});

export const extDragonTigerFightLocators = DragonTigerFightLocators;
