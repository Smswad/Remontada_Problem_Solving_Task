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

// 6. Return the sum of all integers in an array.

var simpleArraySum = function (ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }
    return sum;
};

// let answer = simpleArraySum([1, 2, 3, 4])
// console.log(answer);

// 7. Return true if it is not a weekday or you are on vacation.

var sleepIn = function (weekday, vacation) {
    if (!weekday || vacation) {
        return true;
    }
    return false;
};

// console.log(sleepIn(true, false));

// 8. Two monkeys are in trouble if both are smiling or neither is smiling. Return true in that case.

var monkeyTrouble = function (aSmile, bSmile) {
    if (aSmile == true && bSmile == true) {
        return true;
    } else if (aSmile == false && bSmile == false) {
        return true;
    } else {
        return false;
    }
};

// console.log(monkeyTrouble(true,true));

// 9. Return the sum of two integers, but return double the sum when they are equal.


var sumDouble = function (a, b) {
    if (a == b) {
        return 2 * (a + b);
    } else {
        return a + b;
    }
};

// console.log(sumDouble(3, 3));

// 10. Return the absolute difference between n and 21, doubling it when n is greater than 21.

var diff21 = function (n) {
    if (n > 21) {
        return ((n - 21) * 2);
    } else {
        return (n - 21);
    }
};

// console.log(diff21(25));