const name = "Mayank"
const age = 21

//console.log(name + age);

console.log(`My name is ${name} and my age is ${age}`);

const gameName = new String("Mayank-dave-com")

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0 , 5)
console.log(newString);

const anotherName = gameName.slice(-5,5)
console.log(anotherName);

const newName = "   Mayank    "
console.log(newName);
console.log(newName.trim());

const url = "https://mayank.com/mayank%20dave"

console.log(url.replace("%20","-"));

console.log((url.includes("mayank")));

console.log(gameName.split("-"));