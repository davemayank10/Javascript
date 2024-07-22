let a = 100

if(true){
    let a = 10
    console.log("inner:" , a);
    const b = 20

}

// console.log(a);
//console.log(b);
// console.log(c);

function one() {
    const username = "mayank"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if(true) {
    const username = "mayank"

    if(true) {
        const website = " youtube"

        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++   interesting  ++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}

//addTwo(5)
const addTwo = function (num){
    return num + 2
}
addTwo(5)