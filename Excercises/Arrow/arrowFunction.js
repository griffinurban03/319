

let add = (a,b) => a + b;

const mult = (a,b) => a * b;

const sub = (a,b) => a - b;

const double = a => a * 2;


console.log("Before...");
setTimeout(()=>{
    console.log("Inside timer");
},5000);
console.log("After...");