/********************************************** FOR LOOPS **********************************************/

// Create a loop that executes ten times and logs the values 1..10

// Code Here
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Create a loop that loops through the array below and prints the individual values inside the array
const arr = ['first', 2, { third: true }, [4], `five`];

console.log(arr.length);

// Code Here
for (let i = 0; i < arr.length; i++) {
  console.log(i);
  console.log(arr[i]);
}

// Create a loop that loops through the array below and subtracts 1 from each value
let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Code Here
for (let i = 0; i < nums.length; i++) {
  console.log(i);
  nums[i] = nums[i] - 1;
  // nums[i] -= 1;
  // nums[i]--;
}

console.log(nums);

// Create a loop that loops through the array below and adds the doubled value of the array to a new array
let singles = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
let doubles = [];

console.log(singles.length);

// Code Here
for (let i = 0; i < singles.length; i++) {
  doubles.push(singles[i] * 2);
}

console.log(singles);
console.log(doubles);

// Create a loop that appends the numbers 1 through 10 to a string
let string = '';

// Code Here
for (let i = 1; i < 11; i++) {
  console.log(i);
  // string += i
  string = string + i;
}

console.log(string);

// Create a loop that creates a string from the values in the array below. Put a space between each value
const phraseArr = ['The', 'arsonist', 'has', 'oddly', 'shaped', 'feet'];
let phraseStr = '';

console.log(phraseArr.length);

// Code Here
for (let i = 0; i < phraseArr.length; i++) {
  console.log(i);
  if (i === phraseArr.length - 1) {
    // phraseStr += phraseArr[i];
    phraseStr = phraseStr + phraseArr[i];
  } else {
    // phraseStr += phraseArr[i] + ' ';
    phraseStr = phraseStr + phraseArr[i] + ' ';
  }
  // if(i === 0){
  //   phraseStr = phraseArr[i]
  // } else {
  //   phraseStr = `${phraseStr} ${phraseArr[i]}`
  // }
}

console.log(phraseStr);
console.log(phraseStr === 'The arsonist has oddly shaped feet');

// Create a loop that loops 11 ten times and logs the numbers 10..1 and then logs 'BLAST OFF!' at the last iteration

// Code Here
for (let i = 10; i > 0; i--) {
  console.log(i);
}

//While loop

let counterOne = -1;

do {
  counterOne++;
  console.log(counterOne);
} while (counterOne < 10);

console.log(counterOne);

let counterTwo = -1;

while (counterTwo < 10) {
  counterTwo++;
  console.log(counterTwo);
}

console.log(counterTwo);

/********************************************** WHILE LOOPS **********************************************/

// Create a while loop that loops 10 times and logs the numbers 1..10

// Code here
let i = 0;

while (i < 10) {
  i++;
}

console.log(i);

/********************************************** CALLBACKS **********************************************/

// Create a function that takes in callMe as callback and invokes the callback

function callMe() {
  console.log('I was called');
}

// Code Here
function myFunc(callback) {
  return callback();
}

myFunc(callMe);
myFunc(function () {
  console.log('hello');
});

// Create function that takes in a callback and loops through the array below and invokes the callback for each item in the array

const someNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function logger(value) {
  console.log(value);
}

// Code Here
function yesSir(callback) {
  for (let i = 0; i < someNums.length; i++) {
    callback(someNums[i]);
  }
}

yesSir(logger);

/********************************************** TERNARIES **********************************************/

// Create a ternary that evaluates if the number is greater than 10. If it is, return 10. If it isn't, return the number

const num = 5;

// Code Here
const result = num > 10 ? 10 : num;

console.log(result);

// Convert the function below to use a ternary instead of an if else block

function yesOrNo(bool) {
  // if (bool) {
  //   return 'yes';
  // } else {
  //   return 'no';
  // }
  return bool ? 'yes' : 'no';
}

console.log(yesOrNo(true));
console.log(yesOrNo(false));

// Convert the nested ternary into an if block and a ternary

function canDrinkAndDrive(age) {
  if (age >= 21) {
    return 'You Can Drink and Drive! (Not at the same time)';
  }

  return age >= 16 ? 'You can drive!' : 'You are too young to drive or drink!';

  // return age >= 21
  //   ? 'You Can Drink and Drive! (Not at the same time)'
  //   : age >= 16
  //   ? 'You can drive!'
  //   : 'You are too young to drive or drink!';
}

console.log(canDrinkAndDrive(1));
console.log(canDrinkAndDrive(17));
console.log(canDrinkAndDrive(32));