
var socket = io();
var messageButton = document.getElementById("roll");

messageButton.addEventListener("click", emitMessage);

function emitMessage () {
    socket.emit("roll", "Client: " + socket.id);
}

socket.on("roll", function (result) {
    console.log(result);
});