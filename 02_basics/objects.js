// singleton

//Object.create()

// object literals

const mysym = Symbol("key")

const JsUser = {
        name: "Mayank",
        "full name": "Mayank Dave",
        [mysym]: "key",
        age: 21,
        location: "Vadodara",
        email: "davemayank05@gmail.com",
        isLoggedin: false,
        lastLoginDay: ["Monday" , "Sunday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser["mysym"]);

JsUser.email = "davemayank05@google.com"

//Object.freeze(JsUser)

JsUser.email = "davemayank05@chatgpt.com"

console.log(JsUser);

JsUser.greeting = function(){
        console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());