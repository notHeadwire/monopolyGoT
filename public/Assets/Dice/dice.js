const button = document.getElementById("diceButton");
let diceThrow = 0;
let playerturn;
button.onclick= function(){
    console.log("in Button click")
        rollDice()
};

function checkPash (diceOne, diceTwo, player, dicethrow){
    console.log("checkPash/ playerturn: "+playerturn )
    if (playerturn===undefined){
        playerturn=player
        console.log("checkPash/ playerturn undefinded dicethrow: " + diceThrow)
        return false
    }
    console.log("checkPash/ playerturn: "+playerturn)
    console.log("checkPash/ player: "+player)
    if (playerturn!==player) {
        console.log("checkPash/ playerturn != player")
        if (dicethrow === 0) {

            if (diceTwo === diceOne) {
                dicethrow = 0;
                return true
            } else {
                diceThrow++;
            }
            playerturn=player
            return false
        }
        return false
    }else{
        diceThrow++;
        return false
    }
}

const rollDice = () => {
    const diceOne = (Math.floor(Math.random() * 6) + 1);
    const diceTwo = (Math.floor(Math.random() * 6) + 1);
    console.log("rollDice diceThrow: "+diceThrow)
    if(checkPash(diceOne, diceTwo, curPlayer, diceThrow))
    {
        if (diceThrow===0) {
            console.log("rollDice/ Pash /diceThrow===0")
            vRollDiceOne(diceOne);
            vRollDiceTwo(diceTwo);
            return diceTwo + diceOne
        }
        return 0
    }else{
        console.log("rollDice/ no Pash diceThrow: "+ diceThrow)
        if (diceThrow===0){
        console.log(diceOne + ' ' + diceTwo);
        vRollDiceOne(diceOne);
        vRollDiceTwo(diceTwo);
        return diceTwo + diceOne
        }else{
            diceThrow++;
            return 0
        }
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