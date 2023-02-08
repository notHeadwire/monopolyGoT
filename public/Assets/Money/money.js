//Geld anzeigen

document.querySelector('#moneyP1').innerHTML = 'Player 1: ' + players[0].money + "$";
document.querySelector('#moneyP2').innerHTML = 'Player 2: ' + players[1].money + "$";


function getMoneyGo() {
    players[curPlayer].money = players[curPlayer].money + 2000;

    if (curPlayer = 0) {
        document.querySelector('#moneyP1').innerHTML = 'Player 1: ' + players[curPlayer].money + "$";
    } else if (curPlayer = 1) {
        document.querySelector('#moneyP2').innerHTML = 'Player 2: ' + players[curPlayer].money + "$";
    }
}
