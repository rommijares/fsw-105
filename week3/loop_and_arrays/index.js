var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
    name: "Mike",
    age: 12,
    gender: 'male'
    },{
    name: 'Madeline',
    age: 80,
    gender: 'female'
    },{
    name: 'Cheryl',
    age: 22,
    gender: 'female'
    },{
    name: 'Sam',
    age: 30,
    gender: 'male'
    },{
    name: 'Suzy',
    age: 4,
    gender: 'female'
    }
];

// Old Enough or Not Old Enough
function isOldEnough() {
    for (var i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log( 'is old enough');
        } 
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log( 'is not old enough');
        }
    }
}
isOldEnough();
console.log('===============')

// Personalized Message
function personalMessage() {
    for (var i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough to see Mad Max Fury Road');
        } 
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough to see Mad Max Fury Road');
        }
    }
}
personalMessage();
console.log('===============')

// Male or Female Message
function maleOrFemale() {
    for (var i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'male') {
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough. He is good to see Mad Max Fury Road');
        } 
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'male') {
        console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough to see Mad Max, do not let him in');
        }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'female') {
            console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough. She is good to see Mad Max Fury Road');
            }
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'female') {
            console.log( peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough to see Mad Max, do not let her in');
            }
    }
}
maleOrFemale();
console.log('===============')

// For loop that iterates through 101 numbers 
function oddOrEven() {
    for (var x=0; x<=100; x++) {
        if ( x % 2 == 0) {
        console.log( x + ' is even');
        } 
        else {
        console.log( x + ' is odd');
        }
    }
}
oddOrEven();