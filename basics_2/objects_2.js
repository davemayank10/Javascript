//const user = new Object()

const user = {}

user.id = "1234"
user.name = "Mayank"
user.isLoggedIn = false

console.log(user);

const regUser = {
    email: "davemayank05@chatgpt.com",
    fullname:{
        userfullname:{
            firstname: "Mayank",
            lastname: "Dave"
        }
    }
}
console.log(regUser.fullname);

console.log(regUser.fullname.userfullname);

console.log(regUser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

//const obj4 = {obj1 , obj2 , obj3}

// const obj4 = Object.assign({} , obj1 , obj2 , obj3)

const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4);

const users = [
    {
        id: 1,
        email: "davemayank05@chatgpt.com"
    },

    {
        id: 1,
        email: "davemayank05@chatgpt.com"
    },

    {
        id: 1,
        email: "davemayank05@chatgpt.com"
    },
]

console.log( users[1].email);

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("name"));