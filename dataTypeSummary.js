/* 
  Primitive
 7 types:
1. Big int
2. Boolean
3. Number
4. Null
5. String
6. Symbol
7. Undefined

  Reference ( Non- Primitive )
  1. Array
  2. Object
  3. Function

  Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

const scoreValue = 100;
const score = 100.4;

const isLoogedIn = false;
const outsideTemp = null;
let userName;


const animeProtagonist = ["Naruto", "Luffy", "Isagi"];
const myObj = {
    name: "kamalsheel",
    age: 22,
}

let userOne = {
    email: "User1@gmail.com",
    address: "Kanpur"
}

console.log(userOne);

let userTwo = userOne;
console.log(userTwo);

userTwo.email = "ksm@outlook.com";
userOne.address = "kathmandu";


console.log(userOne);
console.log(userTwo);