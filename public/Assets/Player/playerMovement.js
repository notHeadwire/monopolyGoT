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

    players[tempTurn].curField = eyes + players[tempTurn].curField;
    if (players[tempTurn].curField >= 40) {
        players[tempTurn].curField = players[tempTurn].curField - 40;
        getMoneyGo();
    }
    //playerTurn = playerID,  curField -> neues Feld auf welches gerollt wurde
    move(players[tempTurn].playerId,players[tempTurn].curField);
    nextPlayer();
};