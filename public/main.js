let socket=io();

let messageDiceButton = document.getElementById("diceButton")
messageDiceButton.addEventListener("click", emitMessage);

function emitMessage () {
    socket.emit("roll", "Client: " + socket.id);
}

socket.on("roll result", function (result) {
    console.log(result);
});