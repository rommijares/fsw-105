function upperAndLowerCase(str) {
    var newStr = str.toUpperCase() + str.toLowerCase()
    return newStr
};

var test1 =upperAndLowerCase('hello')
console.log(test1)


function findMiddleIndex(str) {
    var midIndex = Math.floor(str.length / 2)
    return midIndex
};

var test2 = findMiddleIndex('September')
console.log(test2)


function returnFirstHalf(str) {
    var firstHalf = str.slice(0, Math.floor(str.length / 2))
    return firstHalf
};

var test3 = returnFirstHalf('Hello World')
console.log(test3)


function capitalizeAndLowerCase(str) {
    var half = str.slice(0, Math.floor(str.length / 2))
    var secondHalf = str.slice( Math.floor(str.length / 2), str.length)
    var newWord = half.toUpperCase() + secondHalf.toLowerCase()
    return newWord
};

var test4 = capitalizeAndLowerCase('hello')
console.log(test4)