import { Components } from "sc-automation-core";

let WukongsRevengeLocators =  Components.BaseLocator.CascadingSlotLocators

const imgGameName = {x: 30, y:603, w:350, h:90 };
const btnTurbo = {x:1085, y:617};
const imgTurboOFF = {x:1085, y:617};
const imgTurboOn = {x:1085, y:617};
const imgTurboDefault = {x:1085, y:617};
const lblRoundID = {x:1026, y:124, w: 198, h: 34};
const lblTumbleWinList = {x:1026, y:194, w: 218, h: 246};
const btnTrialMode ={x:1040, y:464, w: 175, h: 54};
const btnAutoSpin ={x:803, y:619};
const imgUserBalanceTrialMode={x:1024, y:57, w: 198, h:37};
const lblRoundIdFirstRoundTrialMode={x:1026, y:124, w: 198, h: 34};
const lblTumbleWinListTrialMode = {x:1026, y:194};
const mnuHamburgerExpandTrialMode = {x: 29, y:88, w:69};
const mnuHamburgerExpandSoundOn = {x: 29, y:88, w:69};
const mnuHamburgerExpandSoundOff = {x: 29, y:88, w:69};
const icoGuide = {x: 45, y:522, w: 42, h:42};
const popGameGuide = {x: 555, y: 52, w: 177, h: 40}








WukongsRevengeLocators.forEach((item, i)=> 
    { 
        if (item.name == "popGameGuide"){
        item.x = popGameGuide.x;
        item.y= popGameGuide.y; 
        item.width = popGameGuide.w;
        item.height= popGameGuide.h; 
    } });
WukongsRevengeLocators.forEach((item, i)=> 
    { 
        if (item.name == "imgUserBalanceTrialMode"){
        item.x = imgUserBalanceTrialMode.x;
        item.y= imgUserBalanceTrialMode.y; 
        item.width = imgUserBalanceTrialMode.w;
        item.height= imgUserBalanceTrialMode.h; 
    } });
WukongsRevengeLocators.forEach((item, i)=> 
    { 
        if (item.name == "lblRoundID"){
        item.x = lblRoundID.x;
        item.y= lblRoundID.y; 
        item.width = lblRoundID.w;
        item.height= lblRoundID.h; 
    } });
WukongsRevengeLocators.forEach((item, i)=> 
    { 
        if (item.name == "lblRoundIdFirstRoundTrialMode"){
        item.x = lblRoundIdFirstRoundTrialMode.x;
        item.y= lblRoundIdFirstRoundTrialMode.y; 
        item.width = lblRoundIdFirstRoundTrialMode.w;
        item.height= lblRoundIdFirstRoundTrialMode.h; 
    } });
    
WukongsRevengeLocators.forEach((item, i)=> 
    { 
        if (item.name == "imgGameName"){
        item.x = imgGameName.x;
        item.y= imgGameName.y; 
    } });
WukongsRevengeLocators.forEach((item, i)=> 
    { 
        if (item.name == "icoGuide"){
        item.x = icoGuide.x;
        item.y= icoGuide.y; 
        item.width=icoGuide.w;
        item.width=icoGuide.w;
        item.height=icoGuide.h;
    } });
WukongsRevengeLocators.forEach((item, i)=>
    { 
        if (item.name == "btnTurbo"){
        item.x = btnTurbo.x;
        item.y= btnTurbo.y;
     }} );
WukongsRevengeLocators.forEach((item, i)=>
    { 
        if (item.name == "btnAutoSpin"){
        item.x = btnAutoSpin.x;
        item.y= btnAutoSpin.y;
    }} );
WukongsRevengeLocators.forEach((item, i)=>
    { 
        if (item.name == "btnTrialMode"){

        item.x = btnTrialMode.x;
        item.y = btnTrialMode.y;
    }} );
WukongsRevengeLocators.forEach((item, i)=>
    { 
        if (item.name == "mnuHamburgerExpandTrialMode"){
    
            item.x = mnuHamburgerExpandTrialMode.x;
            item.y = mnuHamburgerExpandTrialMode.y;
            item.width = mnuHamburgerExpandTrialMode.w;
    }} );
WukongsRevengeLocators.forEach((item, i)=>
    { 
        if (item.name == "mnuHamburgerExpandSoundOn"){
    
            item.x = mnuHamburgerExpandSoundOn.x;
            item.y = mnuHamburgerExpandSoundOn.y;
            item.width = mnuHamburgerExpandSoundOn.w;
    }} );
WukongsRevengeLocators.forEach((item, i)=>
    { 
        if (item.name == "mnuHamburgerExpandSoundOff"){
    
            item.x = mnuHamburgerExpandSoundOff.x;
            item.y = mnuHamburgerExpandSoundOff.y;
            item.width = mnuHamburgerExpandSoundOff.w;
    }} );
WukongsRevengeLocators.forEach((item, i)=>
    { 
        if (item.name == "lblTumbleWinList"){
    
            item.x = lblTumbleWinList.x;
            item.y = lblTumbleWinList.y;
    }} );
WukongsRevengeLocators.forEach((item, i)=>
    { 
        if (item.name == "lblTumbleWinListTrialMode"){
            item.x = lblTumbleWinListTrialMode.x;
            item.y = lblTumbleWinListTrialMode.y;
    }} );

    
WukongsRevengeLocators.forEach((item, i)=>{ if (item.name == "imgTurboOFF") item.x = imgTurboOFF.x } );
WukongsRevengeLocators.forEach((item, i)=>{ if (item.name == "imgTurboOn") item.x = imgTurboOn.x } );
WukongsRevengeLocators.forEach((item, i)=>{ if (item.name == "imgTurboDefault") item.x = imgTurboDefault.x } );


export const extwukongsrevengeLocators = WukongsRevengeLocators
