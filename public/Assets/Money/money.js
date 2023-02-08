//Geld anzeigen

let moneyDisplay=10000;

document.querySelector('#moneyDisplay').innerHTML = 'Player 1: ' + moneyDisplay + "$";


function getMoneyGo() {
    moneyDisplay = moneyDisplay + 2000;
    document.querySelector('#moneyDisplay').innerHTML = 'Player 1: ' + moneyDisplay + "$";
}
