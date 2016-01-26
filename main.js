var readline = require('readline-sync');


console.log("****************************************************************");
console.log("*************** Welcome to the Colosasl Adventure! *************");
console.log("**********************  Let's play!    *************************");
console.log("****************************************************************");

var name = readline.question(" What is your name? ");
var hp = 10;
var bHp = 2;
var gHp = 4;
var dHp = 7;

var gameIsRunning = true;
var inventory = {};


//***** Main Choices *****//


while (true) {

    console.log("What would you like to do?");
    console.log("_______________________________________________________________________");
    console.log("[1]: Walk");
    console.log("[2]: See Stats & Inventory");
    console.log("[3]: Grab something from the Inventory");
    console.log("[4]: Quit the program");
    var choice = readline.question("Please type 1, 2, 3 or 4: ");
    console.log("_______________________________________________________________________");
    runUsersChoice(choice);
}


//***** Main Choices Switch *****//

function runUsersChoice(choice) {

    switch (choice) {
    case "1":
        randomNumber();
        break;

    case "2":
        displayStats();
        break;

    case "3":
        displayInventory();
        break;

    case "4":
        console.log("***********************************************************");
        console.log("*************************** Goodbye! **********************");
        console.log("***********************************************************");
        process.exit();

    default:
        defaultChoice();
        break;
    }
}


//***** Main Choice Functions *****//


//***** [1] Walk *****//


function randomNumber() {
    console.log("");
    console.log("You have chosen to walk a bit.");
    console.log("");
    var walk = Math.floor(Math.random() * (13 - 1));


    // Nothing Happens//

    if (walk <= 5) {
        console.log("Uh oh nothing happened on your walk.");
        return;


        // Giant Enemy// 

    } else if (walk <= 7) {
        console.log("Uh no! A Green Giant blocks your path!");
        console.log("--------------------------------------");
        console.log("What would you like to do?");
        console.log("--------------------------------------");
        console.log("[1]: Attack");
        console.log("[2]: Run Away!");
        console.log("[3]: Exit Game");
        var choice = readline.question("Please type 1, 2, or 3:");


        hp = (hp - enemyDmg());
        if (hp < 1) {
            console.log("");
            console.log("*****************************************************************");
            console.log("**************    The Green Giant ate  you   ********************");
            console.log("**************** Game Over.  Thanks for playing! ****************");
            console.log("*****************************************************************");
            console.log("");
            process.exit();
        } else {
            console.log("Your health is now " + hp + "!");
            return;
        }


        // Troll Enemy//

    } else if (walk <= 10) {
        console.log("Oh no!  A hairy troll blocks your path!");
        hp = (hp - enemyDmg());
        if (hp < 1) {
            console.log("");
            console.log("*****************************************************************");
            console.log("**************      The hairy troll killed you       ************");
            console.log("**************** Game Over.  Thanks for playing! ****************");
            console.log("*****************************************************************");
            console.log("");
            process.exit();
        } else {
            console.log("Your health is now " + hp + "!  The troll dropped a +1 Health Potion!");

            function newInventoryItem() {
                var newItem = "Potion";
                var newAmt = 1;
                addToInventory(newItem, newAmt);
            }

            function addToInventory(item, amt) {
                inventory[item] = amt;
                console.log(inventory);
            }
            return;
        }


        // Dragon Enemy//
    } else {
        console.log("Oh no!  A Dragon blocks your path!");
        hp = (hp - enemyDmg());
        if (hp < 1) {
            console.log("");
            console.log("*****************************************************************");
            console.log("**************    You've been slain by the dragon ******************");
            console.log("**************** Game Over.  Thanks for playing! ****************");
            console.log("*****************************************************************");
            console.log("");
            process.exit();
        } else {
            console.log("Your health is now " + hp + "!  The dragon dropped a +3 Elixir of Health!");

            function newInventoryItem() {
                var newItem = "Elixir";
                var newAmt = 3;
                addToInventory(newItem, newAmt);
            }

            function addToInventory(item, amt) {
                inventory[item] = amt;
                console.log(inventory);
            }
            return;
        }
    }
}


//***** [2] Stats *****//


function displayStats() {
    console.log("^^  ");
    console.log("^^  -----Stats-----");
    console.log("^^  Name: " + name);
    console.log("^^  HP: " + hp);

    displayInventory();

}


//*** [3] Inventory ***//


function displayInventory() {
    if (Object.keys(inventory).length === 0) {
        console.log("^^  ");
        console.log("^^  -----Inventory----- ");
        console.log("^^  You have nothing!");
        console.log("^^  ------------------- ");
    } else {
        for (var i = 0; i < Object.keys(inventory).length; i++) {
            var item = inventory[i];
            var amt = inventory[item];
            console.log("^^  ");
            console.log("^^  -----Inventory----- ");
            console.log("^^  " + item + amt);
            console.log("^^  ------------------- ");
        }
    }
}


//***** [4] Exit *****//



//***** Encounters Switch *****//

function runEncounterChoice(choice) {

    switch (choice) {
    case "1":
        attackDmg();
        break;

    case "2":
        process.stdout.write('\
u001B[2 J\ u001B[0; 0 f');
        displayStats();
        break;

    case "3":
        console.log("****************************************************************");
        console.log("*************************** Goodbye! ***************************");
        console.log("****************************************************************");
        process.exit();

    default:
        defaultChoice();
        break;
    }
}


//***** Attack Dmg *****//


function attackDmg() {
    if (strike >= 1) {
        strike == 0;
    }
    if (aDmg >= 1) {
        aDmg == 0;
    }
    var aDmg = Math.floor(Math.random() * (7 - 1));
    if (aDmg <= 3) {
        var strike = 1;
        console.log("The ensuing fight causes you " + strike + " damage!");
        return strike;
    } else if (aDmg <= 5) {
        var strike = 3;
        console.log("The ensuing fight causes you " + strike + " damage!");
        return strike;
    } else {
        var strike = 5;
        console.log("The ensuing fight causes you " + strike + " damage!");
        return strike;
    }
}


//***** Enemy Dmg *****//


function enemyDmg() {
    if (hit >= 1) {
        hit == 0;
    }
    if (dmg >= 1) {
        dmg == 0;
    }
    var dmg = Math.floor(Math.random() * (7 - 1));
    if (dmg <= 3) {
        var hit = 1;
        console.log("The ensuing fight causes you " + hit + " damage!");
        return hit;
    } else if (dmg <= 5) {
        var hit = 3;
        console.log("The ensuing fight causes you " + hit + " damage!");
        return hit;
    } else {
        var hit = 5;
        console.log("The ensuing fight causes you " + hit + " damage!");
        return hit;
    }
}


//***** Bad Input *****//


function defaultChoice() {
    console.log("");
    var choice = readline.question("You must choose either 1, 2, 3 or 4!");
    runUsersChoice(choice);
}