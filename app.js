//function Calculator that takes two number and an operator
function calculator(num1, num2, operator) {
   if (operator === '+') {
      return num1 + num2;
   } else if (operator === '-') {
      return num1 - num2;
   } else if (operator === '*') {
      return num1 * num2;
   } else if (operator === '/') {
      return num1 / num2;
   } else if (operator === '%') {
      return num1 % num2;
   } else {
      return 'invalid operator';
   }
}

//get input from user
let num1 = +prompt('Enter your first number');
let num2 = +prompt('Enter your second number');
let operator = prompt('Enter your operator for the given list [+, -, *, /, %]');

//run calculator operation
let result = calculator(num1, num2, operator);

//output result
alert(result);