import { Components } from "sc-automation-core";

const extchrismasxLocators = [
    new Components.ImageLocator("guide-1", 150, 72, 976, 580),
    new Components.ImageLocator("guide-2", 150, 72, 976, 580),
    new Components.ImageLocator("guide-3", 150, 72, 976, 580),
    new Components.ImageLocator("guide-4", 150, 72, 976, 580),
    new Components.ImageLocator("guide-5", 150, 72, 976, 580),
    new Components.ImageLocator("guide-6", 150, 72, 976, 580),
    new Components.ImageLocator("guide-7", 150, 72, 976, 580),
    new Components.ImageLocator("guide-8", 150, 72, 976, 580),
]

export const chrismasxLocators = Components.BaseLocator.CrashGameLocators.concat(Components.BaseLocator.GameLobbyLocator).concat(extchrismasxLocators);
const btnStatisticLastRound = {x: 952}
 
chrismasxLocators.forEach((item, i)=>{ if (item.name == "btnStatisticLastRound") item.x = btnStatisticLastRound.x } )