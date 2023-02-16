
const saveButton = document.getElementById("saveGame");
const loadButton = document.getElementById("loadGame");

loadButton.onclick= function (){
    console.log("Loadgame Button");
    loadGame();
}
saveButton.onclick= function (){
    console.log("Savegame Button");
    saveGame();
}
function saveGame(){
    // Define an object to represent the state
    const state = {
        player: players,
        map: boardMap
    };

// Convert the object to a JSON string
    const stateJson = JSON.stringify(state);

// Write the JSON string to a file
    const fs = require('fs'); // if using Node.js
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
    const fs = require('fs'); // if using Node.js

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