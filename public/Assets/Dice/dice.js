var vDiceOne       = document.getElementById('dice1');
var vDiceTwo       = document.getElementById('dice2');




function rollDice(){
   var diceOne = (Math.floor(Math.random() * (6 - 1 + 1) + 1));
   var diceTwo = (Math.floor(Math.random() * (6 - 1 + 1) + 1));

    console.log(diceOne+' '+diceTwo);

    return diceOne+diceTwo
}