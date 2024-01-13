// for of

let greeting = "Hello World!";
for (let greet of greeting) {
    if (greet == " ")
        continue;
    console.log(`Each char is ${greet}`);
}

// maps

let map = new Map();
map.set("Nep", "Nepal");
map.set("Fr", "France");
map.set("UK", "United Kingdom");

console.log(map)

for (let [key, value] of map) {
    console.log(`${key} :- ${value}`);
}

// forEach loop

const coding = ["cpp", "py", "js", "swift", "java"];
coding.forEach(function (lang) {
    console.log(lang);
})

const myCoding = [
    {
        languageName: "python",
        languageFile: "py",
    },
    {
        languageName: "java",
        languageFile: "java",
    },
    {
        languageName: "javascript",
        languageFile: "js"
    }
]

myCoding.forEach((item, index) => {
    console.log(`item at index ${index} is ${item.languageName} which has file extension of ${item.languageFile}`);
})

//Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.filter((nums) => (nums > 7));
console.log(`The numbers greater than 7 are ${newNums}`);


const books = [
    { title: "Book1", genre: "Non-fiction", publishedDate: 1888, edition: 2004 },
    { title: "Book2", genre: "Fiction", publishedDate: 1788, edition: 1999 },
    { title: "Book1", genre: "Fiction", publishedDate: 1238, edition: 2001 },
    { title: "Book1", genre: "Non-fiction", publishedDate: 1008, edition: 2011 },
    { title: "Book1", genre: "Non-fiction", publishedDate: 1999, edition: 2010 },
    { title: "Book1", genre: "Non-fiction", publishedDate: 2001, edition: 2022 },
    { title: "Book1", genre: "Fiction", publishedDate: 2011, edition: 2014 }
];

let userBook = books.filter((bks) => (bks.publishedDate < 2000));
console.log(userBook);

// chaining of fileter and map. Hamle js ma filter pani yestai garna milcha
let newMaps = myNums.map((nums) => (nums * 10)).map((num) => num + 9).filter((nums) => nums >= 20);
console.log(newMaps);


// Reduce

const myArr = [1, 2, 3];
let initialValue = 0;
let sumWithInitialValue = myArr.reduce((accumulator, currentValue) => (accumulator + currentValue), initialValue);
console.log(sumWithInitialValue);


const shoppingCart = [
    {
        item: "Mac",
        price: 300000
    },
    {
        item: "iPhone",
        price: 100000
    },
    {
        item: "iPad",
        price: 70000
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => (acc + item.price), 0);
console.log(`Total price is: ${priceToPay}`);