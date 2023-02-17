let socket=io();

let messageDiceButton = document.getElementById("diceButton")
messageDiceButton.addEventListener("click", emitMessage);

function emitMessage () {
    socket.emit("roll", "Client: " + socket.id);
}

socket.on("roll result", function (result) {
    console.log(result);
});
const saveButton = document.getElementById("saveGame");
const loadButton = document.getElementById("loadGame");

loadButton.onclick= function (){
    console.log("Loadgame Button");
    socket.emit('click', "loadGame")
}
saveButton.onclick= function (){
    console.log("Savegame Button");
    socket.emit('click', "saveGame")
}

