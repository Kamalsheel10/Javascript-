let score = "33abcs";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* 
   Conversion:

   1 => True 0 => False
   "33"=> 33 (number) 
   "33abc" => NaN (Yesko ko pani type chai number nai ho pheri)

*/

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
