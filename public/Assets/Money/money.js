//Geld anzeigen
let rent;
let owner;

document.querySelector('#moneyP1').innerHTML = 'Player 1: ' + players[0].money + "$";
document.querySelector('#moneyP2').innerHTML = 'Player 2: ' + players[1].money + "$";


function getMoneyGo(Player) {
    players[Player].money = players[curPlayer].money + 200;

    if (Player === 0) {
        document.querySelector('#moneyP1').innerHTML = 'Player 1: ' + players[curPlayer].money + "$";
    } else if (Player === 1) {
        document.querySelector('#moneyP2').innerHTML = 'Player 2: ' + players[curPlayer].money + "$";
    }
}

function imBrokeCheck(Player){
    curPlayer=Player
    if (players[curPlayer].money<=0){
        alert("Player "+ curPlayer +" is a broke SandWitch!")
    }
}

function refreshMoneyDisplay(){
    document.querySelector('#moneyP1').innerHTML = 'Player 1: ' + players[0].money + "$";
    document.querySelector('#moneyP2').innerHTML = 'Player 2: ' + players[1].money + "$";
    imBrokeCheck(curPlayer);
}


