// Primitive 
// ||
// 7 Type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

//console.log(typeof score); // ===> Number
//console.log(typeof scoreValue); // ===> Number
//console.log(typeof isLoggedIn); // ===> Boolean
//console.log(typeof outsideTemp); // ===> Object
//console.log(typeof userEmail);  // ===> Undefined


const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId); //===> False

// const bigNumber = 4353562625446473373563553n

// ========================================================= //

// Reference (Non Primitive)
// Array, Objects, Functions

//Array
const hero = ["Shaktiman" , "Naagraj" , "Doga"];

//Object
let myObj = {
    name : "Soubhik",
    age : 22,
}

//Function
const myFunction = function(){
    console.log("Hello World !");
    
}

//console.log(typeof myFunction); // ===> Object Function
//console.log(typeof myObj); // ===> Object
//console.log(typeof hero);  // ===> Object


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename;
anothername = "Chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "Soubhik@flipkart.com";

console.log(userOne.email);
console.log(userTwo.email);

