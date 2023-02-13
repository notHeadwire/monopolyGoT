


let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database('./got.db',(err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the got database.');
});


db.exec('CREATE TABLE Player (\n' +
    '    PlayerID int,\n' +
    '    Money varchar(255),\n' +
    '    Position varchar(255),\n' +
    ');',err => err);
db.exec('INSERT INTO Player (PlayerID)'+
        'VALUES (12345);', err => err);

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});


var express = require('express');
var app = express();
var server = require('http').createServer(app);

var io = require('socket.io')(server);

var port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log('Webserver läuft und hört auf Port %d', port);
});

app.use(express.static(__dirname + '/public'));

function roll () {
    return "rollDice()";
}

io.on('connection', function (socket) {
    console.log("connection from client "+socket.id);

    socket.on('roll', function () {
        console.log("roll dice");
        var result = roll();
        io.emit("roll result", result);
    });
});