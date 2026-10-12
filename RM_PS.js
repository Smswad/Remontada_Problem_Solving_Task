// 1. Write a function that returns the sum of two integers.
var solveMeFirst = function (a, b) {
    return a+b;    
};

// let result = solveMeFirst(2,3);
// console.log(result);

// 2. Write a function that returns the product of two numbers.
var multiply = function (a, b) {
    return a * b;
};
// let result = multiply(4, 5);
// console.log(result);

// 3. Write a function that returns "Even" when a number is even and "Odd" when it is odd.

var evenOrOdd = function (number) {
    if (number % 2) {
        return "odd"
    } else {
        return "even"
    }
};

// let result = evenOrOdd(7);
// console.log(result);

// 4. Return the negative value of a number. If it is already negative, keep it negative.

var makeNegative = function (number) {
    if (number < 0) {
        return number
    } else {
        return `-${number}`
    }
};

// let result = makeNegative(8);
// console.log(result);

// 5. Return the opposite of a given number.

var opposite = function (number) {
    return number * -1;
};

// let result = opposite(-7);
// console.log(result);

