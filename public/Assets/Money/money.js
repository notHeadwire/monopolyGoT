//Geld anzeigen

document.querySelector('#moneyP1').innerHTML = 'Player 1: ' + players[0].money + "$";
document.querySelector('#moneyP2').innerHTML = 'Player 2: ' + players[1].money + "$";


function getMoneyGo(Player) {
    players[Player].money = players[curPlayer].money + 2000;

    if (Player === 0) {
        document.querySelector('#moneyP1').innerHTML = 'Player 1: ' + players[curPlayer].money + "$";
    } else if (Player === 1) {
        document.querySelector('#moneyP2').innerHTML = 'Player 2: ' + players[curPlayer].money + "$";
    }
}
