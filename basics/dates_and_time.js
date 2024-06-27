let myDate = new Date()

console.log(myDate);

console.log(myDate.toDateString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleDateString("en-IN"));

console.log(typeof myDate);


let myCreatedDate_1 = new Date(2023 , 0 , 23)    //month starting from zero
console.log(myCreatedDate_1.toDateString());

let myCreatedDate_2 = new Date(2023 , 0 , 23 , 6 , 10)
console.log(myCreatedDate_2.toLocaleString());

let myCreatedDate_3 = new Date("01-25-2024")
console.log(myCreatedDate_3.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreatedDate_1.getTime());

console.log(Math.round(Date.now()/1000));

let newDate = new Date()

console.log(newDate);

console.log(newDate.getMonth() + 1);

console.log(newDate.getDay());

console.log(newDate.toLocaleString("default" , {
    weekday: "long"
})); 