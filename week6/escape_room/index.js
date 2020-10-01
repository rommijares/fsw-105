var readlineSync = require('readline-sync');
 
const playerName = readlineSync.question('What is your name? ');

let welcome = `Hello ${playerName}! Welcome to the Escape Room Simulation!`
    console.log(welcome);

let alive = true;
let hasKey = false;

while(alive == true)
{
    const options = readlineSync.keyIn(` Press 1 to Put hand in the hole \n Press 2 to Find the key \n Press 3 to Open the door `, {limit: '$<1-3>'});

    if (options == 1) {
        console.log(`How unlucky ${playerName}. You are dead! Better luck next time! \n     GAME OVER!`);
        alive = false
    }
    else if (options == 2 && hasKey == false) {
        console.log(`Good job ${playerName}! You found the key!`);
        hasKey = true;
    }
    else if (options == 2 && hasKey == true ) {
        console.log(`${playerName}, you ALREADY have the key! Please proceed to Option 3.`);
    }
    else if (options == 3 && hasKey == false) {
        console.log(`${playerName}, you need to look for the key first! Please visit Option 2 first.`);
        //hasKey = true;
    }
    else if (options == 3 && hasKey == true) {
        console.log(`Congratulations ${playerName}! You got out of the Escape Room! You won! \n -- END OF GAME--`);
        alive = false;
    }

}