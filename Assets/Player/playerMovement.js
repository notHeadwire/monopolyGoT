// Function to switch the object to a different div
function movePlayer(newDivId) {
    var object = document.getElementById("Player1");
    var currentDiv = object.parentNode;
    var newDiv = document.getElementById(newDivId);
    newDiv.appendChild(object);
}

// Listener für On-Click Roll Dice
document.getElementById("Player1").addEventListener("click", function() {
    var eyes = rollDice();
    movePlayer(eyes);
});