pc.script.create('Money', function (app) {
    // Creates a new Money instance
    var Money = function (entity) {
        this.entity = entity;
    };

    var cash = [500, 100, 50, 20, 10, 5, 1];
    var cashHeight = 0.12;

    var mainScript;
    var UI;

    var roll = '#rollButton';
    var end = '#endButton';
    var properties = '#propertiesButton';
    var houses = '#housesButton';
    var trade = '#tradeButton';
    var propertiesDone = '#propertiesDoneButton';
    var chanceDone = '#chanceDoneButton';
    var comChestDone = '#comChestDoneButton';

    Money.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            mainScript = this.entity.script.Main;
            UI = this.entity.script.UIHandler;
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
        },

        payPropertyRent: function () {
            rent = mainScript.getCurrentTile ().rent[mainScript.getCurrentTile ().houses];

            this.withdraw (mainScript.getCurrentPlayer (), rent, true);
            this.deposit (mainScript.players[mainScript.getCurrentTile ().ownedBy], rent);

            UI.showMessage('Alert', mainScript.getCurrentPlayer ().name + ' pays $' + rent + ' in rent to ' + mainScript.players[mainScript.getCurrentTile ().ownedBy].name);

            UI.updateButtons([end, properties, houses, trade]);
        },

        payRailRoadRent: function () {
            var railroadNumber = 5;
            var amountOwned = -1;

            for (i = 0; i < 4; i++) {
                if (mainScript.tiles[railroadNumber].ownedBy === mainScript.players[mainScript.tiles[railroadNumber].ownedBy]) {
                    amountOwned += 1;
                    railRoadNumber += 10;
                }
            }

            if (amountOwned > -1) {
                rent = mainScript.getCurrentTile ().rent[amountOwned];

                this.withdraw (mainScript.getCurrentPlayer (), rent, true);
                this.deposit (mainScript.players[mainScript.getCurrentTile ().ownedBy], rent);

                UI.showMessage ('Alert', mainScript.getCurrentPlayer ().name + ' pays $' + rent + ' in rent to ' + mainScript.players[mainScript.getCurrentTile ().ownedBy].name);

                UI.updateButtons ([end, properties, houses, trade]);
            } else {
                UI.updateButtons ([end, properties, houses, trade]);
            }
        },

        payUtilityRent: function () {
            if (mainScript.tiles[12].ownedBy === mainScript.tiles[28].ownedBy) {
                rent = mainScript.getRandomInt (1, 12) * 10;
            } else {
                rent = mainScript.getRandomInt (1, 12) * 4;
            }

            this.withdraw (mainScript.getCurrentPlayer (), rent, true);
            this.deposit (mainScript.players[mainScript.getCurrentTile ().ownedBy], rent);

            UI.showMessage('Alert', mainScript.getCurrentPlayer ().name + ' pays $' + rent + ' in rent to ' + mainScript.players[mainScript.getCurrentTile ().ownedBy].name);

            UI.updateButtons ([end, properties, houses, trade]);
        },

        deposit: function (player, amount) {
            player.money += amount;
            UI.updateMoney (player);
            this.updateCash (player);
        },

        withdraw: function (player, amount, debt) {
            if (player.money - amount >= 0) {
                player.money -= amount;
                UI.updateMoney (player);
                this.updateCash (player);

                return true;
            } else {
                if (debt === true) {
                    app.timeScale = 0;
                } else {
                    UI.showMessage ('Alert', player.name + " does not have enough money to purchase this.");
                }
                return false;
            }
        },

        updateCash: function (player) {
            var money = player.money;

            var cashFolder = app.root.findByName ('Player ' + parseInt(player.idnumber + 1));

            for (i = 0; i < player.notes.length; i++) {
                player.notes[i].destroy ();
            }

            player.notes = [];

            for (i = 0; i < cash.length; i++) {
                player.cashValue[i] = Math.floor (money / cash[i]);
                money -= player.cashValue[i] * cash[i];
                player.cash[i].enabled = false;
            }

            for (z = 0; z < player.cashValue.length; z++) {

                for (c = 0; c < player.cashValue[z]; c++) {
                    var newNote = player.cash[z].clone ();
                    player.cash[z].getParent ().addChild (newNote);

                    newNote.translate (this.getRandomFloat (-0.1, 0.1), cashHeight * c, this.getRandomFloat (-0.1, 0.1));

                    if (c !== player.cashValue[z] - 1) {
                        newNote.rotateLocal (0, this.getRandomFloat (-6, 6), 0);
                    }

                    newNote.enabled = true;

                    player.notes[player.notes.length] = newNote;
                }
            }

        },

        getRandomFloat: function (min, max) {
            return (Math.floor (Math.random () * ((max * 100) - (min * 100) + 1)) + (min * 100)) / 100;
        }
    };

    return Money;
});