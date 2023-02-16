let turnButton = document.getElementById("endTurnButton");
turnButton.onclick = function(){
    nextPlayer();
    stopAfterNoPash = Boolean(false);
    pashCounter = 0;
    buyOnlyOnce = 0;
};

