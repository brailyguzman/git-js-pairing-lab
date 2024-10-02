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

// Tests
// fiveToOneHundred();
// multiplesOfThree();
// multiplesOfThreeOrFive();
// untilNum(9);
// console.log(multiply(10, -5));
