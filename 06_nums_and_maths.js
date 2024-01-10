const score = 100;
console.log(score);

const gameScore = new Number(400);
console.log(gameScore);

console.log(gameScore.toString().length);
console.log(gameScore.toFixed(5));

const otherNumber = 123.849;
console.log(otherNumber.toPrecision(3));

const amountPaid = 10000000;
console.log(amountPaid.toLocaleString());
console.log(amountPaid.toLocaleString("en-IN"));

// ++++++++++++++++++   MATHS    ++++++++++++++++++

console.log(Math);
console.log(Math.abs(-9999));
console.log(Math.round(69.3));
console.log(Math.ceil(44.2));
console.log(Math.floor(12.9));

console.log("Generating random randomers:");
for (let i = 1; i <= 5; i++) {
    console.log(Math.floor((Math.random() * 10) + 1));
}

// Generating random numbers between 1 to 6:
const min = 1;
const max = 6;
console.log("Generating random numbers between 1 to 6")
for (let a = 1; a <= 10; a++) {
    const dice = (Math.floor(Math.random() * (max - min + 1)) + min); // Formula nai ho yo
    console.log(dice);
}  