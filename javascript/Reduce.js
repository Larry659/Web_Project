console.log("Starting....");

const numbers = [3, 56, 3, 23];
const len = numbers.length
console.log(len);
const ans = numbers.reduce((x,y) => {
    x += y;
    
    return x
}, 60)
console.log(ans/len);

const names = ["lanre", "dayo", "austin"];
const listGreet = names.reduce((greeting, name) => {
    const salute = `${greeting} ${name}`
    return salute;
}, "Good morning")

console.log(listGreet);








const employee = [
    
    {name:"olawale",age:23,Occupation:"developer",id:1,salary:2300},
    {name:"bernard",age:21,Occupation:"footballer",id:2,salary:2000},
    {name:"chukwudi",age:29,Occupation:"lecturer",id:3, salary:1950},
    {name:"folahan",age:19,Occupation:"musician",id:4,salary: 3500}
];
 const total = employee.reduce(function(acc,currItem){
    console.log(`total : ${acc}`);
     console.log(`current: ${currItem.salary}`);
    //  acc += currItem.salary;
    acc  = currItem.salary;
    
     return acc;
// always return the first parameter from the function
 },0);

console.log(total);
