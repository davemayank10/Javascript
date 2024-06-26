// Stack (Primitive) , Heap(Non-Primitive)


//------------------Stack------------------------//


let name = "Mayank"

let anotherName = name
anotherName = "Dave"
                                                
console.log(name);
console.log(anotherName);


//--------------------Heap----------------------//


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "davemayank05@gmail.com"    

console.log(userOne.email);
console.log(userTwo.email);