const buyButton = document.getElementById('buyButton');
let curStreetID;

let MediterraneanAvenue = {streetID: "1", owner: "", price: 60, rent: 2};
let BalticAvenue = {streetID: "3", owner: "", price: 60, rent: 4};
let OrientalAvenue = {streetID: "6", owner: "", price: 100, rent: 6};
let VermontAvenue = {streetID: "8", owner: "", price: 100, rent: 6};
let ConnecticutAvenue = {streetID: "9", owner: "", price: 120, rent: 8};
let StCharlesPlace = {streetID: "11", owner: "", price: 140, rent: 10};
let StatesAvenue = {streetID: "13", owner: "", price: 140, rent: 10};
let VirginiaAvenue = {streetID: "14", owner: "", price: 160, rent: 12};
let StJamesPlace = {streetID: "16", owner: "", price: 180, rent: 14};
let TennesseeAvenue = {streetID: "18", owner: "", price: 180, rent: 14};
let NewYorkAvenue = {streetID: "19", owner: "", price: 200, rent: 16};
let KentuckyAvenue = {streetID: "21", owner: "", price: 220, rent: 18};
let IndianaAvenue = {streetID: "23", owner: "", price: 220, rent: 18};
let IllinoisAvenue = {streetID: "24", owner: "", price: 240, rent: 20};
let AtlanticAvenue = {streetID: "26", owner: "", price: 260, rent: 22};
let VentnorAvenue = {streetID: "27", owner: "", price: 260, rent: 22};
let MarvinGardens = {streetID: "29", owner: "", price: 280, rent: 24};
let PacificAvenue = {streetID: "31", owner: "", price: 300, rent: 26};
let NorthCarolinaAvenue = {streetID: "32", owner: "", price: 300, rent: 26};
let PennsylvaniaAvenue = {streetID: "34", owner: "", price: 320, rent: 28};
let ParkPlace = {streetID: "37", owner: "", price: 350, rent: 35};
let Boardwalk = {streetID: "39", owner: "", price: 400, rent: 50};

let BORailroad = {streetID: "5", owner: "", price: 200, rent: 25};
let PennsylvaniaRailroad = {streetID: "10", owner: "", price: 200, rent: 25};
let ShortLine = {streetID: "15", owner: "", price: 200, rent: 25};
let ReadingRailroad = {streetID: "20", owner: "", price: 200, rent: 25};
let ElectricCompany = {streetID: "12", owner: "", price: 150, rent: 4};
let WaterWorks = {streetID: "28", owner: "", price: 150, rent: 4};



let streetsList = [Boardwalk, ParkPlace, PennsylvaniaAvenue, NorthCarolinaAvenue, MarvinGardens, VentnorAvenue,
    AtlanticAvenue, BalticAvenue, MediterraneanAvenue, OrientalAvenue, VermontAvenue,
    ConnecticutAvenue, StCharlesPlace, StatesAvenue, VirginiaAvenue, StJamesPlace, TennesseeAvenue, NewYorkAvenue,
    KentuckyAvenue, IndianaAvenue, IllinoisAvenue, BORailroad, PennsylvaniaRailroad,
    ShortLine, ReadingRailroad, ElectricCompany, WaterWorks];


function checkProperty(){
   let curPlayerPos = players[curPlayer].curField;
       curStreetID = getStreetIndex(curPlayerPos);

   if (streetsList[curStreetID].owner === ""){
       showBuy();
   } else {
       hideBuy();
       payRent(curStreetID);
   }
}

function payRent(streetID){
    let rent = streetsList[streetID].rent;
    let ownerID = streetsList[streetID].owner;

    players[curPlayer].money = players[curPlayer].money - rent;
    players[ownerID].money = players[ownerID].money + rent;
    refreshMoneyDisplay();
}

function getStreetIndex(fieldID) {
    return streetsList.indexOf(fieldID);
}

function showBuy() {
    buyButton.classList.add('show');
}

function hideBuy() {
    buyButton.classList.remove('show');
}


buyButton.onclick = function (){
    streetsList[curStreetID].owner = curPlayer;
    players[curPlayer].money -= streetsList[curStreetID].price;

};

button.onclick = function (){
    checkProperty();
}