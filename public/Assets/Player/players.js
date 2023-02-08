//multiple players
let curPlayer = 0;
let p1 = {playerId: "Player1", curField: 0, money: 10000}
let p2 = {playerId: "Player2", curField: 0, money: 10000}
let players = [p1, p2];


function nextPlayer(){
    curPlayer = curPlayer + 1;
    if (curPlayer > players.length -1) {
        curPlayer = 0;
    }
}


