//multiple players
let tempTurn = 0;
let p1 = {playerId: "Player1", curField: 0}
let p2 = {playerId: "Player2", curField: 0}
let players = [p1, p2];


function nextPlayer(){
    tempTurn = tempTurn + 1;
    if (tempTurn > players.length -1) {
        tempTurn = 0;
    }
}


