let GO = {streetID: "0", owner: "Board", price: 0, rent: 0};
let MediterraneanAvenue = {streetID: "1", owner: "", price: 60, rent: 2};
let Community = {streetID: "2", owner: "Board", price: 0, rent: 0};
let BalticAvenue = {streetID: "3", owner: "", price: 60, rent: 4};
let IncomeTax = {streetID: "4", owner: "Board", price: 0, rent: 50};
let South = {streetID: "5", owner: "", price: 200, rent: 25};
let OrientalAvenue = {streetID: "6", owner: "", price: 100, rent: 6};
let Chance = {streetID: "7", owner: "Board", price: 0, rent: 0};
let VermontAvenue = {streetID: "8", owner: "", price: 100, rent: 6};
let ConnecticutAvenue = {streetID: "9", owner: "", price: 120, rent: 8};
let JailVisit = {streetID: "10", owner: "Board", price: 0, rent: 0};
let StCharlesPlace = {streetID: "11", owner: "", price: 140, rent: 10};
let ElectricCompany = {streetID: "12", owner: "", price: 150, rent: 4};
let StatesAvenue = {streetID: "13", owner: "", price: 140, rent: 10};
let VirginiaAvenue = {streetID: "14", owner: "", price: 160, rent: 12};
let West = {streetID: "15", owner: "", price: 200, rent: 25};
let StJamesPlace = {streetID: "16", owner: "", price: 180, rent: 14};
let Community2 = {streetID: "17", owner: "Board", price: 0, rent: 0};
let TennesseeAvenue = {streetID: "18", owner: "", price: 180, rent: 14};
let NewYorkAvenue = {streetID: "19", owner: "", price: 200, rent: 16};
let FreeParking = {streetID: "20", owner: "Board", price: 0, rent: 0};
let KentuckyAvenue = {streetID: "21", owner: "", price: 220, rent: 18};
let Chance2 = {streetID: "22", owner: "Board", price: 0, rent: 0};
let IndianaAvenue = {streetID: "23", owner: "", price: 220, rent: 18};
let IllinoisAvenue = {streetID: "24", owner: "", price: 240, rent: 20};
let North = {streetID: "25", owner: "", price: 200, rent: 25};
let AtlanticAvenue = {streetID: "26", owner: "", price: 260, rent: 22};
let VentnorAvenue = {streetID: "27", owner: "", price: 260, rent: 22};
let WaterWorks = {streetID: "28", owner: "", price: 150, rent: 4};
let MarvinGardens = {streetID: "29", owner: "", price: 280, rent: 24};
let GoToJail = {streetID: "30", owner: "Board", price: 0, rent: 0};
let PacificAvenue = {streetID: "31", owner: "", price: 300, rent: 26};
let NorthCarolinaAvenue = {streetID: "32", owner: "", price: 300, rent: 26};
let Community3 = {streetID: "33", owner: "Board", price: 0, rent: 0};
let PennsylvaniaAvenue = {streetID: "34", owner: "", price: 320, rent: 28};
let East = {streetID: "35", owner: "", price: 200, rent: 25};
let Chance3 = {streetID: "22", owner: "Board", price: 0, rent: 0};
let ParkPlace = {streetID: "37", owner: "", price: 350, rent: 35};
let SuperTax = {streetID: "38", owner: "Board", price: 0, rent: 25};
let Boardwalk = {streetID: "39", owner: "", price: 400, rent: 50};



const boardMap = new Map([
    [0, GO],
    [1, MediterraneanAvenue],
    [2, Community],
    [3, BalticAvenue],
    [4, IncomeTax],
    [5, South],
    [6, OrientalAvenue],
    [7, Chance],
    [8, VermontAvenue],
    [9, ConnecticutAvenue],
    [10, JailVisit],
    [11, StCharlesPlace],
    [12, ElectricCompany],
    [13, StatesAvenue],
    [14, VirginiaAvenue],
    [15, West],
    [16, StJamesPlace],
    [17, Community2],
    [18, TennesseeAvenue],
    [19, NewYorkAvenue],
    [20, FreeParking],
    [21, KentuckyAvenue],
    [22, Chance2],
    [23, IndianaAvenue],
    [24, IllinoisAvenue],
    [25, North],
    [26, AtlanticAvenue],
    [27, VentnorAvenue],
    [28, WaterWorks],
    [29, MarvinGardens],
    [30, GoToJail],
    [31, PacificAvenue],
    [32, NorthCarolinaAvenue],
    [33, Community3],
    [34, PennsylvaniaAvenue],
    [35, East],
    [36, Chance3],
    [37, ParkPlace],
    [38, SuperTax],
    [39, Boardwalk]
]);

/*
let streetsList = [Boardwalk, ParkPlace, PennsylvaniaAvenue, NorthCarolinaAvenue, MarvinGardens, VentnorAvenue,
    AtlanticAvenue, BalticAvenue, MediterraneanAvenue, OrientalAvenue, VermontAvenue,
    ConnecticutAvenue, StCharlesPlace, StatesAvenue, VirginiaAvenue, StJamesPlace, TennesseeAvenue, NewYorkAvenue,
    KentuckyAvenue, IndianaAvenue, IllinoisAvenue, BORailroad, PennsylvaniaRailroad,
    ShortLine, ReadingRailroad, ElectricCompany, WaterWorks, PacificAvenue];
*/

function checkProperty(){
   let curPlayerPos = players[curPlayer].curField;
       console.log("Current Owner: " + boardMap.get(curPlayerPos).owner);

   if (boardMap.get(curPlayerPos).owner == ""){
       showBuy();
   } else {
       hideBuy();
       payRent(curPlayerPos);
   }
}

function payRent(curPlayerPos){
    let rent = boardMap.get(curPlayerPos).rent;
    let ownerID = boardMap.get(curPlayerPos).owner;

    if (boardMap.get(curPlayerPos).owner == "Board") {
        console.log("Ereignisfeld")
    } else {
        players[curPlayer].money = players[curPlayer].money - rent;
        players[ownerID].money = players[ownerID].money + rent;
        refreshMoneyDisplay();
    }
}


/*
function getStreetIndex(fieldID) {
    if (streetsList.indexOf(streetsListfieldID) >= 0){
        console.log("Index: " + streetsList.indexOf(fieldID));
        return streetsList.indexOf(fieldID);
    } else{
        return 0;
    }
}
*/

let buyButton = document.getElementById('buyButton');
function showBuy() {
    buyButton.classList.add('show');
}

function hideBuy() {
    buyButton.classList.remove('show');
}


buyButton.onclick = function (){
    let curPlayerPos = players[curPlayer].curField;
    console.log("curplayer: " + curPlayer);
    boardMap.get(curPlayerPos).owner = curPlayer;
    players[curPlayer].money -= boardMap.get(curPlayerPos).price;
    refreshMoneyDisplay();
};


let diceButtonCheckProp = document.getElementById("diceButton");
diceButtonCheckProp.addEventListener("click",
    function (){
    console.log("In Buttonfunction Property")
            checkProperty();

    });
