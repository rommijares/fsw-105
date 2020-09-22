var readlineSync = require('readline-sync');

function math() {

    var firstNum = readlineSync.questionInt('Please enter your first number: ');
    var secondNum = readlineSync.questionInt('Please enter your second number: ');
    var operation = readlineSync.question('Please enter the operation to perform - add, sub , mul, div: ');

    function addNumbers(num1,num2) {
        return 'Adding the first number: ' + num1 + ' with the second number ' + num2 + ' equals to: ' + (num1 + num2);
    }

    function subtractNumbers(num1,num2) {
        return 'Subtracting the first number: ' + num1 + ' and the second number ' + num2 + ' equals to: ' + (num1 - num2);
    }

    function multiplyNumbers(num1,num2) {
        return 'Multiplying the first number: ' + num1 + ' with the second number ' + num2 + ' equals to: ' + (num1 * num2);
    }

    function divideNumbers(num1,num2) {
        return 'Dividing the first number: ' + num1 + ' and the second number ' + num2 + ' equals to: ' + (num1 / num2);
    }

    if (operation == 'add') {
        console.log(addNumbers(firstNum, secondNum));
    }
    else if (operation == 'sub') {
        console.log(subtractNumbers(firstNum,secondNum));
    }
    else if (operation == 'mul') {
        console.log(multiplyNumbers(firstNum,secondNum));
    }
    else if (operation == 'div') {
        console.log(divideNumbers(firstNum,secondNum));
    }

    if (readlineSync.keyInYN('Do you want to continue?')) {
        readlineSync.prompt(math())
        }
    else {
        return
        };
}
    
math()