// #1
const owner = "John"
let age = 101 

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i< pets.length; i++) {
        let pet = { type: pets[i] } 
        
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", owner)
    return petObjects
}

runForLoop(["cat","dog"])


// #2
const carrots = ["bright orange", "ripe", "rotten"]

let mapVegetables = arr => {
    const result = arr.map(carrot => ({ type: "carrot", name: carrot}))
    return result
    }
console.log(mapVegetables(carrots))


//#3
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

let filterForFriendly = arr => {
    const result = arr.filter(person => person.friendly)    
    return result
}
console.log(filterForFriendly(people))


// #4
let doMathSum = (a,b) => a+b
    console.log(doMathSum(6,5))

let produceProduct = (a,b) => a*b
    console.log(produceProduct(8,8))


// #5
let printString = (firstName = "Jane", lastName= "Doe", age = 100) =>
     "Hi " + firstName + " " + lastName + " , how does it feel to be " + age

console.log(printString('Kat','Stark',40))


// #6
let repeatPrintString = (firstName = "Jane", lastName= "Doe", age = 100) =>
     `Hi ${firstName} ${lastName}, how does it feel to be ${age}`

console.log(repeatPrintString('Kat','Stark', 40))


// #7
const animals = [
    {
        type:"dog",
        name:"theodore"
    },
    {
        type:"cat",
        name:"whiskers"
    },
    {
        type:"pig",
        name:"piglette"
    },
    {
        type:"dog",
        name:"sparky"
    }
];

let filterForDogs = arr => {
    const result = arr.filter(animal => animal.type === "dog" ? true:false) 
    return result
} 
console.log(filterForDogs(animals))


// #8
let message = (name,location) =>
    `Hi ${name}! \nWelcome to ${location}, \nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

console.log(message("Joe", "Orlando"))