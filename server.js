
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
    return "roledeys";
}

io.on('connection', function (socket) {
    console.log("connection from client "+socket.id);

    socket.on('roll', function () {
        console.log("roll dice");
        var result = roll();
        io.emit("roll result", result);
    });

    socket.on('saveGame', function (){
        console.log("soket saveGame")
        saveGame()});
    socket.on('loadGame', loadGame())
});

let fs = require('fs');
const config = JSON.parse(fs.readFileSync("./config.json"))




function saveGame(){
    // Define an object to represent the state
    const state = {
        player: players,
        map: boardMap
    };

// Convert the object to a JSON string
    const stateJson = JSON.stringify(state);

// Write the JSON string to a file
    //const fs = require('fs'); // if using Node.js
    fs.writeFile('state.json', stateJson, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('State file saved.');
            alert("Game saved");
        }
    });
}

function loadGame(){
    //const fs = require('fs'); // if using Node.js

// Read the state file
    fs.readFile('state.json', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            // Parse the JSON data into an object
            const state = JSON.parse(data);

            boardMap= state.map;
            players=state.player;
            alert("Game loaded");
        }
    });

}