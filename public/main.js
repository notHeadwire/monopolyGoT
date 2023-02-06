var socket = io();
var messageButton = document.getElementById("send-message");

messageButton.addEventListener("click", emitMessage);

function emitMessage () {
    socket.emit("roll", "Client: " + socket.id);
}

socket.on("roll result", function (result) {
    console.log(result);
});