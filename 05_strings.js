const name = "Kamalsheel";
const repoCount = 13;
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("KSM-FC");

console.log(gameName);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.toLowerCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf("C"));

const newString = gameName.substring(0, 3);
console.log(newString);

const userName = "     Kamalsheel     ";
console.log(userName);
console.log(userName.trim());

const url = "https://www.ksm10.com.np/kamalsheel%1000Mainali";
console.log(url.replace("%1000", "-"));

console.log(gameName.split("-"));