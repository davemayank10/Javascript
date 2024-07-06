function myName() {
        console.log("M");
        console.log("a");
        console.log("y");
        console.log("a");
        console.log("n");
        console.log("k");
}

//myName()

function sum(num1 , num2) {
        const num3 = num1 + num2
        return num3
}

const result = sum(5 , 6)

//console.log("result", result);

function loginUserMessage(username = "Mayank") {
    if(!username){
        console.log("Enter your username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Mayank"));
console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200 , 500 , 900));

const user = {
    username: "Mayank", 
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username: "Sam",
    price: 199
})

const arr = [200 , 500 , 800]

function returnValue(getValue){
        return getValue[0]
}

//console.log(returnValue(arr));

console.log(returnValue([500 , 400 , 600]));