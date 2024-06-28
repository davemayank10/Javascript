// array

const myArr = [1 , 2 , 3 , 4]

const myArr2 = new Array(1 , 2 , 3 , 4)

console.log(myArr[0]);

// array methods

myArr.push(5)
myArr.push(6)
console.log(myArr);

myArr.pop()

console.log(myArr);

myArr.unshift(7)

console.log(myArr);

myArr.shift()

console.log(myArr);

console.log(myArr.includes(6));

console.log(myArr.indexOf(5));

console.log(myArr.join());  // convert array into string

console.log("A",myArr);
console.log(myArr.slice(1 , 3));

console.log("B",myArr);
console.log(myArr.splice(1 , 3));

console.log("C",myArr);
