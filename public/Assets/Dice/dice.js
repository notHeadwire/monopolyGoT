//Funktion Würfel rollen

function rollDice() {
    let rolledEyes;
    let dice1;
    let dice2;

    dice1 = (Math.floor(Math.random() * (6 - 1 + 1) + 1));
    dice2 = (Math.floor(Math.random() * (6 - 1 + 1) + 1));
    rolledEyes= dice1 + dice2;
    document.querySelector('#middleText').innerHTML = dice1 + ' + ' + dice2 + ' = ' + rolledEyes;
}

