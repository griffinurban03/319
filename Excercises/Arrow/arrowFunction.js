

let add = (a,b) => a + b;

const mult = (a,b) => a * b;

const sub = (a,b) => a - b;

const double = a => a * 2;


console.log("Before...");
setTimeout(()=>{
    console.log("Inside timer");
},5000);
console.log("After...");

let array = [1,3,5,7,8,9,11,15,16];

//map function to double everything in the array fast


let myDoubleArray = array.map((element)=>element * 2);

console.log(myDoubleArray);

