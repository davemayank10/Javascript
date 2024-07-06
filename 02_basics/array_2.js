const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

//marvel_heros.push(dc_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros , ...dc_heros]

console.log(all_new_heros);

const arr = [1 , 2 , 3 , [4 , 5 , 6] , [6 , 7 , [8 , 9]]]

const arr2 = arr.flat(Infinity)
console.log(arr2);

console.log(Array.isArray("Mayank"));

console.log(Array.from("Mayank"));

console.log(Array.from({name: "Mayank"}));

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score , score2 , score3));