console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

const helloExpression = function() {
  return 'Hello World as a function expression!';
}

console.log(helloExpression());

const helloArrow = () => "Hello World as an arrow function!";

console.log(helloArrow());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Greetings declaration ' + name + '!';
}

// Remember to call the function to test
console.log(helloName('Mark'));

const helloNameExpression = function(name) {
  return 'Greetings expression ' + name + '!';
}

console.log(helloNameExpression('Mark'));

const helloNameArrow = (name) => 'Greetings arrow ' + name + '!';

console.log(helloNameArrow('Mark'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}

console.log('Add numbers declaration 2 and 3 =', addNumbers(2,3));

const addNumbersExpression = function(x,y) {
  return x + y;
}

console.log('Add numbers expression 2 and 3 =', addNumbersExpression(2,3));

const addNumbersArrow = (x,y) => x + y;

console.log('Add numbers arrow 2 and 3 =', addNumbersArrow(2,3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(x,y,z){
  return x * y * z;
}

console.log('Multiply three numbers declaration 2 * 3 * 4 =', multiplyThree(2,3,4));

const multiplyThreeExpression = function(x,y,z) {
  return x * y * z;
}

console.log('Multiply three numbers expression 2 * 3 * 4 =', multiplyThreeExpression(2,3,4));

const multiplyThreeArrow = (x,y,z) => x * y * z;

console.log('Multiply three numbers arrow 2 * 3 * 4 =', multiplyThreeArrow(2,3,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive Declaration - should say true', isPositive(3) );
console.log( 'isPositive Declaration - should say false', isPositive(0) );
console.log( 'isPositive Declaration - should say false', isPositive(-3) );

const isPositiveExpression = function(number) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  } 
}

console.log( 'isPositive Expression - should say true', isPositiveExpression(3) );
console.log( 'isPositive Expression - should say false', isPositiveExpression(0) );
console.log( 'isPositive Expression - should say false', isPositiveExpression(-3) );

const isPositiveArrow = (number) => {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

console.log( 'isPositive Arrow - should say true', isPositiveArrow(3) );
console.log( 'isPositive Arrow - should say false', isPositiveArrow(0) );
console.log( 'isPositive Arrow - should say false', isPositiveArrow(-3) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length - 1];
}
const emptyArrayForNumberSix = [];
const arrayForNumberSix = ['this', 'or', 'that'];
console.log('Empty array for number six:', emptyArrayForNumberSix);
console.log('Array for number six:', arrayForNumberSix);
console.log('Declaration - The last item in the array is:', getLast(arrayForNumberSix));
console.log('Declaration - The last item in this empty array is:', getLast(emptyArrayForNumberSix));

const getLastExpression = function(array){
  return array[array.length - 1];
}

console.log('Expression - The last item in the array is:', getLastExpression(arrayForNumberSix));
console.log('Expression - The last item in this empty array is:', getLastExpression(emptyArrayForNumberSix));

const getLastArrow = (array) => array[array.length - 1];

console.log('Arrow - The last item in the array is:', getLastArrow(arrayForNumberSix));
console.log('Arrow - The last item in this empty array is:', getLastArrow(emptyArrayForNumberSix));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  let result = false;
  for(let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      result = true;
    }
  }
  return result;
}
const arrayForNumberSeven = [1, 2, 3, 4, 5];
console.log('This is the array for number seven:', arrayForNumberSeven);
console.log('Declaration - 3 is in the array!', find(3, arrayForNumberSeven));
console.log('Declaration - 6 is in the array!', find(6, arrayForNumberSeven));

const findExpression = function(value, array) {
  let result = false;
  for(let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      result = true;
    }
  }
  return result;
}

console.log('Expression - 3 is in the array!', findExpression(3, arrayForNumberSeven));
console.log('Expression - 6 is in the array!', findExpression(6, arrayForNumberSeven));

const findArrow = (value, array) => {
  let result = false;
  for(let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      result = true;
    }
  }
  return result;
}

console.log('Arrow - 3 is in the array!', findArrow(3, arrayForNumberSeven));
console.log('Arrow - 6 is in the array!', findArrow(6, arrayForNumberSeven));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
