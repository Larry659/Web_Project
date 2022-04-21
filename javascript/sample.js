const power = (y) => {
return y**2;
}

const name = "ola"
const details = {
    name : "balo",
    age : 12
}

// console.log(power(5));
// console.log(`This is ${name}`);
// console.log(details);


console.log(power(5));
setTimeout(() => {
console.log(`This is ${name}`);
    
}, 0);
console.log(details);
