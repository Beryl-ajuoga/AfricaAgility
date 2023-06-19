
//Write a function expression to find the maximum of two numbers and
//assign it to a variable called max

var max = function (a, b) {
    return a > b ? a : b;
};

var result = max(3, 7);
console.log(result);



// //Convert the following function into an arrow function

// // function greet(name) {
// //     return 'Hello, ' + name + '!';
// // }

let greet = (name) => {
    return "hello, " + name + "!";
};
let myName = "Beryl";
console.log(myName);



//Create a higher order function called filter that takes an array and a callback function. The filter
//function should return a new array with only the elements that pass the callback function's test.

let filter = (array, callback) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = filter(numbers, (element) => {
    return element % 2 === 0;
}
);

console.log(evenNumbers);



//Write a callback function called square that takes a number as an argument
//and returns its square value

let square = (array, callback) => array.filter(callback);

let array = [1, 2, 3, 4,5];

let filteredArray = filter(array, (element) => element % 2 === 0);

console.log(filteredArray);

//Rewrite the following code using ES6 syntax:
// var name = 'john';
// var age = 25;
// var message ='My name is  ' + ' and I am  '  + 'years old. ';



const name = "Jane";
const age = "25";
const message = "My name is  ${ name } and I am ${ age } years old. ";

ᐧ



