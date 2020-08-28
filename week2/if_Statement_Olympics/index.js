// Preliminaries

if ( 5>3 ) {
    console.log ('is greater than')
};

if ( 'cat'.length === 3 ) {
    console.log ('is the length')
};

if ( 'cat' === 'dog' ) {
    console.log ('is the same')
}   
else {
    console.log ('not the same')
};

// Bronze Medal

var person = {
    name: 'Bobby',
    age: 12
};

if ( person.age >= 18 ) {
    console.log (person.name + ' ' + 'is allowed')
} 
else {
    console.log (person.name + ' ' + 'is not allowed')
};

if ( person.name.charAt(0) === 'B') {
    console.log (person.name + ' ' + 'is allowed')
} 
else {
    console.log (person.name + ' ' + 'is not allowed')
};

if ( person.name.charAt(0) === 'B' && person.age >= 18 ) {
    console.log ( person.name + ' ' + 'is allowed')
} 
else {
    console.log (person.name + ' ' + 'is not allowed')
};

// Silver Medal

if ( 1 === '1') {
    console.log ('strict')
}
else if ( 1 == '1') {
    console.log ('loose')
}
else {
    console.log ('not equal at all')
};

if ( 1<= 2 && 2 == 4 ) {
    console.log ('yes')
}
else {
    console.log ('no')
}

// Gold Medal

console.log ( typeof 'dog' === 'string' ? 'is a string' : 'is not a string');

console.log ( typeof true === 'boolean' ? 'is a boolean' : 'is not a boolean');

var example;
console.log ( typeof example === 'undefined' ? 'is undefined' : 'is defined');

console.log ( 's' > 12 ? 'is greater than' : 'is not greater than');

console.log ( 'x' > 3 ? 'is greater than' : 'is not greater than');

console.log ( 'g' > 100 ? 'is greater than' : 'is not greater than');

var myNum = 8;
console.log ( myNum % 2 === 0 ? myNum + ' ' +'is even' : myNum + ' ' + 'is odd');