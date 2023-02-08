// Function to switch the object to a different div
let curField = 0

function move(playerId, fieldId){
    // Get sub-div element
    let player = document.getElementById(playerId);

    // Get main-div element
    let field = document.getElementById(fieldId);

    // Remove sub-div from original parent
    player.parentNode.removeChild(player);

    // Add sub-div to main-div
    field.appendChild(player);
}
// Get button element
let button = document.getElementById("diceButton");

button.onclick = function(){
    let eyes = rollDice();

    players[curPlayer].curField = eyes + players[curPlayer].curField;
    if (players[curPlayer].curField >= 40) {
        players[curPlayer].curField = players[curPlayer].curField - 40;
        getMoneyGo(curPlayer);
    }
    //playerTurn = playerID,  curField -> neues Feld auf welches gerollt wurde
    move(players[curPlayer].playerId,players[curPlayer].curField);
    nextPlayer();
};