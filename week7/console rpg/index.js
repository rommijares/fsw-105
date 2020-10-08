var readlineSync = require('readline-sync');

const playerName = readlineSync.question(`Hello adventurer! May I have your name? `);

let welcomeMessage = `Welcome ${playerName} to Console High School RPG! May good fortunes smile upon you!`
    console.log(welcomeMessage)

let alive = true
let playerMaxHealth = 100
let playerAttackPower = 20
let enemyMaxHealth = 80
let enemyAttackPower = 20


while (alive == true) {

    const walk = readlineSync.keyIn(`Press "W" to walk. `, {limit: '$<w>'});
        let randomAttack = Math.floor((Math.random() * 3) + 1)
        if ( randomAttack == 1) {
            let enemyType = Math.floor((Math.random() * 3) + 1)
                if (enemyType == 1) {
                    console.log(`Oh no! You have been attacked by a Big Bad Bully!`)
                }
                else if (enemyType == 2) {
                    console.log(`Oh no! You have been attacked by a Gossiping Giddy Girl`)
                }
                else if (enemyType == 3) {
                    console.log(`Oh no! You have been attacked by a Nasty Nosey Nerd`)
                }
            
            let attackOrRun = readlineSync.keyIn(`Press "A" to attack the enemy! OR... Press "R" to run away! `, {limit: 'ar' })
                if (attackOrRun == 'a') {
                    let playerAttack = Math.floor(Math.random() * playerAttackPower)
                    enemyMaxHealth -= playerAttack
                    let enemyAttack = Math.floor(Math.random() * enemyAttackPower)
                    playerMaxHealth -= enemyAttack
                    console.log(`You hit the enemy with ${playerAttack} points. You were hit with ${enemyAttack} points`)

                        if (playerMaxHealth > 0 || enemyMaxHealth > 0) {
                         console.log()
                        }
                }
                else if (attackOrRun == 'r') {
                    let runOrFail = Math.floor((Math.random() * 2) + 1)
                        if (runOrFail == 1) {
                            let enemyAttack = Math.floor(Math.random() * enemyAttackPower)
                            playerMaxHealth -= enemyAttack
                            console.log(`You successfully ran away! But you were hit with ${enemyAttack} points by the enemy`)
                    }
                        else if (runOrFail == 2) {
                            let enemyAttack = Math.floor(Math.random() * enemyAttackPower)
                            playerMaxHealth -= enemyAttack
                            console.log(`Your escape was unsuccessful and you were hit with ${enemyAttack} points by the enemy`)
                        }
                }
        }
        else {
            console.log(`Keep on walking`)
        }

}