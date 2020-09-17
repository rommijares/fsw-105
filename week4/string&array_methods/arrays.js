var fruit = ['banana', 'apple', 'orange', 'watermelon'];

var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce']

function fruitsVeggies() {
    var vegRemoveLast = vegetables.pop()
    var fruitAddFirst = fruit.shift()
    var orangeIndex = fruit.indexOf('orange')
    var fruitEnd = fruit.push(orangeIndex)
    var lengthOfVeg = vegetables.length
    var addNumVeg = vegetables.push(lengthOfVeg)
    var food = fruit.concat(vegetables)
    var newFood = food.splice(4,2)
    var reverseFood = food.reverse()
    var foodString = food.toString()
    return foodString
};

var test = fruitsVeggies()
console.log(test)

