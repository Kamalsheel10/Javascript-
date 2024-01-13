const myArr1 = [0, 1, 2, 3, 4, 5];

const myArr2 = [9, 7, 6, 9, 8, 8];


// INTERVIEW QUESTION 
console.log(myArr1.slice(1, 3)); // slice le chai khali array ko index 1 dekhi index 2 samma print garna help garcha
console.log("A ", myArr1);

console.log(myArr2.splice(1, 3)); // splice le chai array lai nai manipulate gardincha. Array ko index 1 to 3 samma ko values lai seperate array banaucha
console.log("B ", myArr2)

// Combining two arrays using spread operator (...)
const favAnime = ["One Piece", "Blue lock", "Attack on titan"];
const favTvShows = ["Cobra kai", "Breaking Bad", "Pysch You"];

const allFav = [...favAnime, ...favTvShows];
console.log(allFav);


//Objects in js

// singleton chai khali constructor bata matrai create huncha
// tala ko object banauni method lai chai object literals bhancha, jasma bata singleton create hunna

const mySymb = Symbol("key1");

const javUser = {
    name: "Kamalsheel",
    "full name": "Kamalsheel Mainali",
    email: "ksm12@gmail.com",
    age: 22,
    city: "Kathmandu",
    isLoggedIn: false,
    [mySymb]: "key" // yo chai object ma symbol add garni tarika 
}

console.log(javUser.email);
console.log(javUser["full name"]);
console.log(javUser[mySymb]);
console.log(javUser)

javUser.greeting = function () {
    console.log(`Hello, ${this["full name"]}! Have a great day ahead `);
}

console.log(javUser.greeting());

const book = {
    author: "John Smith",
    price: 999,
    genre: "Comedy, Slice of life"
}

const { genre: tag } = book;
const { author } = book;

console.log(author);
console.log(tag);

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const result = addTwoNumbers(60, 9);
console.log("Result: ", result);


function shoppingCartPrice(value1, value2, ...num1) {
    return (num1);
}

console.log(shoppingCartPrice(200, 5000, 60000, 400000));

let detailsShopping = {
    name: "Kamalsheel",
    itemID: 211,
    itemPrice: 5000
}

function detailsShipping(anyObject) {
    return `Customer's name: ${anyObject.name} and the price of the ordered item is: ${anyObject.itemPrice}`;
}

console.log(detailsShipping(detailsShopping));

const addThreeNumbers = (num1, num2, num3) => (num1 + num2 + num3);

console.log(addThreeNumbers(5, 6, 7));

//IIFE
(function demoFunction() {
    console.log("Database Connected!");
})();


((username) => {
    console.log(`${username} has logged in!`);
})("kamalsheel")



const emptyObj = {};
if (Object.keys(emptyObj).length == 0) {
    console.log("The object is empty");
}
else {
    console.log("The object is not empty");
}