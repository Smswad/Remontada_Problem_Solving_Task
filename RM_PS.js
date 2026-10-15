// 1. Write a function that returns the sum of two integers.
var solveMeFirst = function (a, b) {
    return a + b;
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

// 11. Return true when a talking parrot is causing trouble outside the allowed hours of 7 through 20.

var parrotTrouble = function (talking, hour) {
    if (talking && (hour < 7 || hour > 20)) {
        return true;
    } else {
        return false;
    }
};

// console.log(parrotTrouble(true, 6));

// 12. Return true if either number is 10 or their sum is 10.

var makes10 = function (a, b) {
    if (a == 10 || b == 10) {
        return true;
    } else if (a + b == 10) {
        return true;
    } else {
        return false;
    }
};

// console.log(makes10(4, 6));

// 13. Return true if n is within 10 of 100 or within 10 of 200.

var nearHundred = function (n) {
    if ((n >= 90 && n <= 110) || (n >= 190 && n <= 210)) {
        return true;
    } else {
        return false;
    }
};

// console.log(nearHundred(110));

// 14. Return true when one number is positive and the other is negative. If negative is true, both must be negative.

var posNeg = function (a, b, negative) {
    if (((a > 0 && b < 0) || (a < 0 && b > 0)) && negative == false) {
        return true;
    }
    else if (negative == true && (a < 0 && b < 0)) {
        return true;
    } else {
        return false;
    }
};

// console.log(posNeg(-1, 1, false));

// 15. Add "not " to the beginning of a string unless it already starts with "not".

var notString = function (str) {

    let StringCompare = str.toLowerCase();

    if (StringCompare.trim().slice(0, 3).includes("not")) {
        return str;
    } else {
        return `not ${str}`;
    }
};

// console.log(notString("bad"));

// 16. Compare two three-element score arrays and return how many points each person earns.

var compareTriplets = function (a, b) {
    let aScore = 0;
    let bScore = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aScore++;
        } else if (a[i] < b[i]) {
            bScore++;
        }
    }
    return [aScore, bScore];
};

// console.log(compareTriplets([5, 6, 7], [3, 6, 10]));

// 17. Return the sum of all values in an integer array.

var aVeryBigSum = function (ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
};

// console.log(aVeryBigSum([1000000001, 1000000002, 1000000003]));

// 18. Create a right-aligned staircase of height n using # characters.

var staircase = function (n) {
    let stairs = "";
    for (let i = 1; i <= n; i++) {
        stairs += (" ".repeat(n - i) + "#".repeat(i) + "\n");
    }
    return stairs;
};

// console.log(staircase(4));

// 19. Round a grade up to the next multiple of 5 when it is close enough; keep grades below 38 unchanged.

var gradingStudents = function (grades) {
    let roundgrades = [];
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];
        if (grade >= 38 && grade % 5 >= 3) {
            roundgrades.push(grade + (5 - grade % 5))
        } else {
            roundgrades.push(grade)
        }
    }
    return roundgrades;
};

// console.log(gradingStudents([73, 67, 38, 33]));

// 20. Convert a 12-hour AM/PM time string into 24-hour format.

var timeConversion = function (s) {
    let modifier = s.slice(-2).toUpperCase();
    let hours = parseInt(s.slice(0, 2), 10);
    let restOfTime = s.slice(2, 8);
    if (modifier === "AM") {
        if (hours === 12) {
            hours = 0;
        }
    }
    else if (modifier === "PM") {
        if (hours !== 12) {
            hours += 12;
        }
    } else {
        return "Invalid Time Input."
    }

    let formattedhour = String(hours).padStart(2, '0');
    return formattedhour + restOfTime;
}
// console.log(timeConversion("07:05:45PM"));