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
