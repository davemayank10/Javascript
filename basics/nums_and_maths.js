
//------------number----------------
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

let string = balance.toFixed(2)

console.log(string);
console.log(string.length);

const othernum = 123.789151
console.log(othernum.toPrecision(4));

const num = 1000000
console.log(num.toLocaleString("en-IN"));


//---------------------maths-----------------------


console.log(Math);

console.log(Math.abs(-5));

console.log(Math.round(5.234));

console.log(Math.ceil(4.2));     

console.log(Math.floor(4.9));

console.log(Math.random());       //values between 0 and 1

console.log((Math.random()*10 + 1));        

console.log(Math.floor((Math.random()*10 + 1)));

//-------------------dice roll----------------------

const min = 1
const max = 6

console.log(Math.floor(Math.random()* (max - min + 1)) + min); //result will be always between 1 and 6