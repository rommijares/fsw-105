var readlineSync = require('readline-sync');

const playerName = readlineSync.question(`Hello adventurer! May I have your name? `);
const player = playerName.toUpperCase()

let welcomeMessage = `Welcome ${player} to The Cursed Forest RPG! Your goal is to reach the town of Sanctuary safely, but watch out... many enemies lurk about the forest so be careful! May good fortunes smile upon you!`
    console.log(welcomeMessage)

let playerMaxHealth = 50
let playerMaxAttack = 10

let enemyMaxAttack = 10
const enemyType = ['Ghastly Ghoul', 'Zombie Corpse', 'Dark Goblin', 'Tormented Soul']

const possibleLoot = ['Health Potion', 'Magic Sword', 'Enchanted Mushroom', 'Useless Stick']
let lootGathered = []

let steps = 0

    function game() {
        
        let enemyMaxHealth = 40
        let playerAttack = Math.floor(Math.random() * playerMaxAttack)
        let enemyAttack = Math.floor(Math.random() * enemyMaxAttack)
        let randomEnemy = enemyType[Math.floor(Math.random() * enemyType.length)]
        let enemyDrop = possibleLoot[Math.floor(Math.random() * 4)]
        
        const options = readlineSync.keyIn(`What would you like to to do? \nPress "W" to walk/move forward. \nPress "P" to view inventory. \nPress "L" to log out.\n`, {limit: '$<wpl>'});

            if (options == 'l') {
                console.log(`You chose to exit the game!`)
                return playerMaxHealth = 0
            }
            else if (options == 'p') {
                console.log(`Name: ${player} \nHealth: ${playerMaxHealth} \nInventory: ${lootGathered} `)
            }
            else if (options == 'w') {
                steps +=  1
                let randomAttack = Math.floor((Math.random() * 3) + 1)
                if (randomAttack <= 2) {
                    console.log(`Walking....`)
                }
                else if ( randomAttack == 3) {
                    console.log(`You have been attacked by ${randomEnemy}`)

                    while (playerMaxHealth > 0 && enemyMaxHealth > 0) {
                        
                        const attackOrRun = readlineSync.keyIn(`Press "A" to attack the enemy! OR... Press "R" to run away! `, {limit: '$<ar>'})
                            
                            // Run Option
                            if (attackOrRun == 'r') {
                                let runOrFail =  Math.floor((Math.random() * 2) + 1)
                                    if (runOrFail == 1) {
                                        console.log('You sucessfully ran away!')
                                        return game()
                                    }
                                    else if (runOrFail == 2) {
                                        playerMaxHealth -= enemyAttack
                                        console.log(`Your escape failed! You were hit with ${enemyAttack} points by the enemy!`)
                                    }
                            }

                            // Attack Option
                            if (attackOrRun == 'a') {
                                enemyMaxHealth -= playerAttack
                                playerMaxHealth -= enemyAttack
                                console.log(`You hit the enemy with ${playerAttack} points. You were hit with ${enemyAttack} points`)
                                
                                if (enemyMaxHealth <=0) {
                                    playerMaxHealth = 45
                                    lootGathered.push(enemyDrop)
                                    console.log(`You defeated ${randomEnemy}! You found a ${enemyDrop} for defeating the enemy!`)
                                }
                                else if (playerMaxHealth <= 0) {
                                    console.log(`${randomEnemy} has defeated you! Game Over!`)
                                }
                            }   
                    }
                }
            }

        if (steps == 8) {
            console.log(`Congratulations... you've reached Sanctuary! You have won the game!`)
        }    
    }

while (playerMaxHealth > 0 && steps < 8) {
    game()
}
   