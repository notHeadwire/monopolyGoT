const button = document.getElementById("diceButton");
let diceThrow = 0;
let lastplayer;
let stopAfterNoPash = Boolean(false);
let pashCounter = 0;
button.onclick = function () {
    console.log("in Button click")
    rollDice()
};

function checkPash(diceOne, diceTwo, player) {

    if (diceOne === diceTwo) {

        console.log("diceThrow: " + diceThrow);
        diceThrow = 0;

        if (lastplayer === undefined) {
            lastplayer = player;
            return true;
        }
        if (lastplayer !== player) {
            lastplayer = player;
            return true;
        }
        if (lastplayer === player) {
            return true;
        }
    } else {
        if (lastplayer === undefined) {
            lastplayer = player;
            return false;
        }
        if (lastplayer !== player) {
            lastplayer = player;
            diceThrow = 0;
            return false;
        }
        if (lastplayer === player) {
            return false;
        }
    }


}

const rollDice = () => {

    console.log("pashCounter: " + pashCounter)
    // const diceOne = (Math.floor(Math.random() * 6) + 1);
    // const diceTwo = (Math.floor(Math.random() * 6) + 1);

    // Mock für buy
    diceOne = 2;
    diceTwo = 1;

    // Mock für max 3 mal Pasch
    // diceOne = 5;
    // diceTwo = 5;
    console.log("rollDice diceThrow: " + diceThrow)

    console.log("---vor Prüfung oben in rollDice: " + stopAfterNoPash);
    if (stopAfterNoPash === true) {
        return 0;
    }

    if (checkPash(diceOne, diceTwo, curPlayer)) {

        console.log("rollDice/ Pash /diceThrow===0")
        if (pashCounter < 3){
            vRollDiceOne(diceOne);
            vRollDiceTwo(diceTwo);
            pashCounter++
            return diceTwo + diceOne
        }
        return 0

    } else {
        console.log("rollDice/ no Pash diceThrow: " + diceThrow)
        if (diceThrow === 0) {
            console.log(diceOne + ' ' + diceTwo);
            vRollDiceOne(diceOne);
            vRollDiceTwo(diceTwo);
            diceThrow++

            console.log("---in else in if: " + stopAfterNoPash);
            stopAfterNoPash = Boolean(true);
            console.log("---in else in if after setting true: " + stopAfterNoPash);

            return diceTwo + diceOne
        }

        console.log("---in else: " + stopAfterNoPash);
        stopAfterNoPash = Boolean(true);
        console.log("---in else after setting true: " + stopAfterNoPash);
        // let disableDiceButton = document.getElementById("diceButton");
        // disableDiceButton.style.visibility = 'hidden';
        return 0
    }
};

const vRollDiceOne = (diceOne) => {
    console.log("vRollDiceOne")
    const diceOneSides = [
        "dice-one-side-one",
        "dice-one-side-two",
        "dice-one-side-three",
        "dice-one-side-four",
        "dice-one-side-five",
        "dice-one-side-six"
    ];

    for (let i = 0; i < 6; i++) {
        document.getElementById(diceOneSides[i]).style.visibility = (i === diceOne - 1) ? "visible" : "hidden";
    }
};

const vRollDiceTwo = (diceTwo) => {
    console.log("vRollDiceTWO")
    const diceTwoSides = [
        "dice-two-side-one",
        "dice-two-side-two",
        "dice-two-side-three",
        "dice-two-side-four",
        "dice-two-side-five",
        "dice-two-side-six"
    ];

    for (let i = 0; i < 6; i++) {
        document.getElementById(diceTwoSides[i]).style.visibility = (i === diceTwo - 1) ? "visible" : "hidden";
    }
};


/* todo review showcase !
let button = document.getElementById("diceButton");

button.onclick = function () {
    console.log("in Button click")
    rollDice()
};

function rollDice() {
    var diceOne = (Math.floor(Math.random() * (6 - 1 + 1) + 1));
    var diceTwo = (Math.floor(Math.random() * (6 - 1 + 1) + 1));


    console.log(diceOne + ' ' + diceTwo);

    vRollDiceOne(diceOne);
    vRollDiceTwo(diceTwo);
    return diceOne + diceTwo
}


function vRollDiceOne(diceOne) {
    console.log("vRollDiceOne")
    switch (diceOne) {
        case 1:
            document.getElementById("dice-one-side-one").style.visibility = "visible";
            document.getElementById("dice-one-side-two").style.visibility = "hidden";
            document.getElementById("dice-one-side-three").style.visibility = "hidden";
            document.getElementById("dice-one-side-four").style.visibility = "hidden";
            document.getElementById("dice-one-side-five").style.visibility = "hidden";
            document.getElementById("dice-one-side-six").style.visibility = "hidden";
            break;
        case 2:
            document.getElementById("dice-one-side-one").style.visibility = "hidden";
            document.getElementById("dice-one-side-two").style.visibility = "visible";
            document.getElementById("dice-one-side-three").style.visibility = "hidden";
            document.getElementById("dice-one-side-four").style.visibility = "hidden";
            document.getElementById("dice-one-side-five").style.visibility = "hidden";
            document.getElementById("dice-one-side-six").style.visibility = "hidden";
            break;
        case 3:
            document.getElementById("dice-one-side-one").style.visibility = "hidden";
            document.getElementById("dice-one-side-two").style.visibility = "hidden";
            document.getElementById("dice-one-side-three").style.visibility = "visible";
            document.getElementById("dice-one-side-four").style.visibility = "hidden";
            document.getElementById("dice-one-side-five").style.visibility = "hidden";
            document.getElementById("dice-one-side-six").style.visibility = "hidden";
            break;
        case 4:
            document.getElementById("dice-one-side-one").style.visibility = "hidden";
            document.getElementById("dice-one-side-two").style.visibility = "hidden";
            document.getElementById("dice-one-side-three").style.visibility = "hidden";
            document.getElementById("dice-one-side-four").style.visibility = "visible";
            document.getElementById("dice-one-side-five").style.visibility = "hidden";
            document.getElementById("dice-one-side-six").style.visibility = "hidden";
            break;
        case 5:
            document.getElementById("dice-one-side-one").style.visibility = "hidden";
            document.getElementById("dice-one-side-two").style.visibility = "hidden";
            document.getElementById("dice-one-side-three").style.visibility = "hidden";
            document.getElementById("dice-one-side-four").style.visibility = "hidden";
            document.getElementById("dice-one-side-five").style.visibility = "visible";
            document.getElementById("dice-one-side-six").style.visibility = "hidden";
            break;
        case 6:
            document.getElementById("dice-one-side-one").style.visibility = "hidden";
            document.getElementById("dice-one-side-two").style.visibility = "hidden";
            document.getElementById("dice-one-side-three").style.visibility = "hidden";
            document.getElementById("dice-one-side-four").style.visibility = "hidden";
            document.getElementById("dice-one-side-five").style.visibility = "hidden";
            document.getElementById("dice-one-side-six").style.visibility = "visible";
            break;
        default://ready
    }
}

function vRollDiceTwo(diceTwo) {
    console.log("vRollDiceTWO")
    switch (diceTwo) {
        case 1:
            document.getElementById("dice-two-side-one").style.visibility = "visible";
            document.getElementById("dice-two-side-two").style.visibility = "hidden";
            document.getElementById("dice-two-side-three").style.visibility = "hidden";
            document.getElementById("dice-two-side-four").style.visibility = "hidden";
            document.getElementById("dice-two-side-five").style.visibility = "hidden";
            document.getElementById("dice-two-side-six").style.visibility = "hidden";
            break;
        case 2:
            document.getElementById("dice-two-side-one").style.visibility = "hidden";
            document.getElementById("dice-two-side-two").style.visibility = "visible";
            document.getElementById("dice-two-side-three").style.visibility = "hidden";
            document.getElementById("dice-two-side-four").style.visibility = "hidden";
            document.getElementById("dice-two-side-five").style.visibility = "hidden";
            document.getElementById("dice-two-side-six").style.visibility = "hidden";
            break;
        case 3:
            document.getElementById("dice-two-side-one").style.visibility = "hidden";
            document.getElementById("dice-two-side-two").style.visibility = "hidden";
            document.getElementById("dice-two-side-three").style.visibility = "visible";
            document.getElementById("dice-two-side-four").style.visibility = "hidden";
            document.getElementById("dice-two-side-five").style.visibility = "hidden";
            document.getElementById("dice-two-side-six").style.visibility = "hidden";
            break;
        case 4:
            document.getElementById("dice-two-side-one").style.visibility = "hidden";
            document.getElementById("dice-two-side-two").style.visibility = "hidden";
            document.getElementById("dice-two-side-three").style.visibility = "hidden";
            document.getElementById("dice-two-side-four").style.visibility = "visible";
            document.getElementById("dice-two-side-five").style.visibility = "hidden";
            document.getElementById("dice-two-side-six").style.visibility = "hidden";
            break;
        case 5:
            document.getElementById("dice-two-side-one").style.visibility = "hidden";
            document.getElementById("dice-two-side-two").style.visibility = "hidden";
            document.getElementById("dice-two-side-three").style.visibility = "hidden";
            document.getElementById("dice-two-side-four").style.visibility = "hidden";
            document.getElementById("dice-two-side-five").style.visibility = "visible";
            document.getElementById("dice-two-side-six").style.visibility = "hidden";
            break;
        case 6:
            document.getElementById("dice-two-side-one").style.visibility = "hidden";
            document.getElementById("dice-two-side-two").style.visibility = "hidden";
            document.getElementById("dice-two-side-three").style.visibility = "hidden";
            document.getElementById("dice-two-side-four").style.visibility = "hidden";
            document.getElementById("dice-two-side-five").style.visibility = "hidden";
            document.getElementById("dice-two-side-six").style.visibility = "visible";
            break;
        default://ready
    }
}
*/