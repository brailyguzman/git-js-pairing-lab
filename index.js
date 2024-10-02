//Code your solutions in this file

// Assignment 1
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i);
    }
};

// Assignment 2
const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
};

// Assignment 3
const multiplesOfThreeOrFive = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        } else if (i % 5 === 0) {
            console.log(i);
        }
    }
};

// Assignment 4
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
};

// Assignment 5
const multiply = (num1, num2) => {
    return num1 * num2;
};

// Assignment 6
const add = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    }

    return num1 + num2;
};

// Assignment 7
const isNegative = (num) => {
    if (num < 0) {
        return true;
    }

    return false;
};

// Assignment 8
const triangleArea = (b, h) => {
    return (1 / 2) * (h * b);
};

// Assignment 9
const betweenTwentyAndFourty = (num) => {
    if (num <= 20) {
        return false;
    } else if (num >= 40) {
        return false;
    }

    return true;
};

// Assignment 10 
const largest = (num1, num2, num3) => {
    return Math.max(num1, num2, num3)
}


// Tests
// fiveToOneHundred();
// multiplesOfThree();
// multiplesOfThreeOrFive();
// untilNum(9);
// console.log(multiply(10, -5));
// console.log(add(5, 5));
// console.log(isNegative(-5));
// console.log(triangleArea(6,8));
// console.log(betweenTwentyAndFourty(20)); //return false
// console.log(betweenTwentyAndFourty(21)); //return true
// console.log(betweenTwentyAndFourty(39)); //return true
// console.log(betweenTwentyAndFourty(40)); //return false
console.log(largest(30, 22, 17));