//////////////////PROBLEM 1////////////////////

//Create a function called capitalizer that takes in an array of strings and returns a new array (does not modify original array) with all strings capitalized.

const sentenceArr = ['hello', 'how', 'are', 'you'];

// Code Here
function capitalizer(array){
  const hi = []

  for (i = 0; i < array.length; i ++){
    hi.push(array[i])
  }
  return hi.toUpperCase;
}
console.log(capitalizer(sentenceArr))



//////////////////PROBLEM 2////////////////////

// Create a function that loops over an array and returs a new array with every other value. Name the function everyOther

const secretMessage = [
  'dont',
  'always',
  'tell',
  'never',
  'anyone',
  'forget',
  'about',
  'to',
  'this',
  'remember',
  'array',
  'always',
];

//Code here

function everyOther(array){
  const newArray = [];
  for (i = 0; i < array.length; i += 2){
    newArray.push(array[i]);
  }
  return newArray
}

console.log(everyOther(secretMessage))

//////////////////PROBLEM 3////////////////////

//Create a function that loops over an array of objects and returns a new array of the value of the `name` key. Name the function nameExtractor.

const coolGuys = [
  { name: 'Bob Ross' },
  { name: 'Steve Irwin' },
  { name: 'Mr. Rogers' },
];

//Code here

function nameExtractor(array){
    const names = []
  for (i = 0; i < array.length; i++){
      names.push(array[i])
  }
  return names
}

console.log(nameExtractor(coolGuys))



//////////////////PROBLEM 4////////////////////

//This while loop is broken. Fix it so that it runs until i is no longer less than 10.

//Code here

function brokenWhileLoop(i) {
  while (i < 10) {
    i += 1;
  }
  return i;
}

console.log(brokenWhileLoop(0));

//////////////////PROBLEM 5////////////////////

//Create a function called rePete that takes in a string and a number and returns a string that is the passed in string repeated that n times.

//Code here
function rePete(str, n){
  newStr = '';
  for (let i = 0; i < n; i++) {
    newStr += str
  }
    return newStr
}

let string = "i love tacos"
console.log(rePete(string,3))

//////////////////PROBLEM 6////////////////////

//rewrite the function below to use a ternary instead of an if/else block

//Code here
function isEven(num) {
  // if (num % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return num % 2 === 0 ? true : false;
}
const yes = 3
console.log(isEven(yes))

//////////////////PROBLEM 7////////////////////

//rewrite the function below to use a single ternary instead of a nested one

//Code Here
function nestedTernary(num) {
  // return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
  if (num === 0){
    return 'zero'
  }
  return num > 0 ? 'positive' : 'negative'
}
const tats = 3
console.log(nestedTernary(tats))