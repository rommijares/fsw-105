// Challenge 1
function sum (num1, num2) {
    return num1 + num2
};
sum()

var test1 = sum(3,5)
console.log(test1)

// Challenge 2
function largestNumber (num1, num2, num3) {
    return Math.max (num1, num2, num3);
};
largestNumber()

var test2 = largestNumber(25,35,40)
console.log(test2)

// Challenge 3
function evenOrOdd (value) {
    if (value%2==0){
        return 'Even'
    }
    else 
        return 'Odd'
};

var test3 = evenOrOdd(5)
console.log(test3)
var test4 = evenOrOdd(24)
console.log(test4)

// Challenge 4
function numOfLetters(str) {
    if (str.length <= 20) {
        return (str+str)
    }
    else if (str.length > 20) {
        var x= Math.floor (str.length / 2)
        return str.slice (0 , x)
    }
};

var test5 = numOfLetters('pool')
console.log(test5)
var test6 = numOfLetters('JavaScriptJavascriptJava')
console.log(test6)