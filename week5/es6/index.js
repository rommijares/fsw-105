// #1
let name = "John"
let age = 101 

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i< pets.length; i++) {
        const pet = { type: pets[i] }
        name;
        if (pet[i] === "cat") {
            name === "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
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
let doMathSum = (a,b) => a*b

let produceProduct = (a,b) => a*b


// #5
let printString = (firstName = "Jane", lastName= "Doe", age = 100) =>
     "Hi " + firstName + " " + lastName + " , how does it feel to be " + age

console.log(printString())


// #6
let printString = (firstName = "Jane", lastName= "Doe", age = 100) =>
     `Hi ${firstName} ${lastName}, how does it feel to be ${age}`

console.log(printString())


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