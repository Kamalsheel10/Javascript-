

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString);

console.log(typeof myDate);
let myCreateDate = new Date("01-11-2024");
console.log(myCreateDate);

console.log(Math.floor(Date.now() / 1000)) // Asked in many interview