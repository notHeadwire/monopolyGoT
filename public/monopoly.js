
    
function Square(name, priceText, color, price, groupNumber, baseRent) {
    this.name = name;
    this.pricetext = priceText;
    this.color = color;
    this.owner = 0;
    this.mortgage = false;
    this.price = (price || 0);
    this.baserent = (baseRent || 0);
}


const square = [];

square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
square[1] = new Square("Mediterranean Avenue", "$60", "#8B4513", 60, 3, 2);
square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[3] = new Square("Baltic Avenue", "$60", "#8B4513", 60, 3, 4);
square[4] = new Square("City Tax", "Pay $200", "#FFFFFF");
square[5] = new Square("Reading Railroad", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Oriental Avenue", "$100", "#87CEEB", 100, 4, 6);
square[7] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[8] = new Square("Vermont Avenue", "$100", "#87CEEB", 100, 4, 6);
square[9] = new Square("Connecticut Avenue", "$120", "#87CEEB", 120, 4, 8);
square[10] = new Square("Just Visiting", "", "#FFFFFF");
square[11] = new Square("St. Charles Place", "$140", "#FF0080", 140, 5, 10);
square[12] = new Square("Electric Company", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("States Avenue", "$140", "#FF0080", 140, 5, 10);
square[14] = new Square("Virginia Avenue", "$160", "#FF0080", 160, 5, 12);
square[15] = new Square("Pennsylvania Railroad", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("St. James Place", "$180", "#FFA500", 180, 6, 14);
square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[18] = new Square("Tennessee Avenue", "$180", "#FFA500", 180, 6, 14);
square[19] = new Square("New York Avenue", "$200", "#FFA500", 200, 6, 16);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Kentucky Avenue", "$220", "#FF0000", 220, 7, 18);
square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[23] = new Square("Indiana Avenue", "$220", "#FF0000", 220, 7, 18);
square[24] = new Square("Illinois Avenue", "$240", "#FF0000", 240, 7, 20);
square[25] = new Square("B&O Railroad", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Atlantic Avenue", "$260", "#FFFF00", 260, 8, 22);
square[27] = new Square("Ventnor Avenue", "$260", "#FFFF00", 260, 8, 22);
square[28] = new Square("Water Works", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Marvin Gardens", "$280", "#FFFF00", 280, 8, 24);
square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
square[31] = new Square("Pacific Avenue", "$300", "#008000", 300, 9, 26);
square[32] = new Square("North Carolina Avenue", "$300", "#008000", 300, 9, 26);
square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[34] = new Square("Pennsylvania Avenue", "$320", "#008000", 320, 9, 28);
square[35] = new Square("Short Line", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
square[37] = new Square("Park Place", "$350", "#0000FF", 350, 10, 35);
square[38] = new Square("LUXURY TAX", "Pay $100", "#FFFFFF");
square[39] = new Square("Boardwalk", "$400", "#0000FF", 400, 10, 50);

for (let i = 0; i < square.length; i++) {
    document.getElementById("field" + i).innerHTML = square[i].name;
    document.querySelector("field" + i).style.backgroundColor = square[i].color;
}
