 const car = {
    prop:this,
    mke:"volvo",
  color: "garnet",
    year: "2020",
    speed:160,
    engine:{
             size:3.5,
            make:"bmw",
            fuel:"petrol",
            piston:["piston1",{make:"ford"},"piston3",
            {    size:34.6,
                 weight:65,
                 power:45
            }]
           
    
    },
    drive:function(){return "drive"}

};
console.log(car.engine.piston[1].make);
// console.log(window)
// console.log(car["engine"]["piston"][3]["weight"]);

// document.write('hello word'); // this displays on the html page.
// alert('hello world');            //alert displays like a pop-up on the topmost part of the browser
// console.log('hello world'); //anything logged in the console will show on the console

// console.log('hello world'); 
// console.log('hello world');
// document.write('this is my place of work');

let firstname = "mandela";
//console.log(firstname);
    //Escape sequence
    // \n -- new line
    // \t -- new tab
    // \' -- single quote
    // \" -- double quuote
    // //-- backslash
   // console.log('this is the beginning:\n of a new dawn');
  // console.log('i am \n Mr Balogun');
   //console.log('i am \t Mr Balogun');
  // console.log('Tolulope said \"this is my book of honour\"');
 console.log('this is my home \\ of peace');


let comment = 'Adedayo\'s father is an engineeer';
let comment2 = "This mandela's school of thought";
//console.log(comment);
console.log('personal message:\n'+ comment2);
const number = 34.5;
const number2 = 45;
const number3 = 500;

let add = number + number2;
let sub = number2 - number;
let mult = number * number2;
let div = number3 / number2;

// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div);

//ARRAYS IN JAVASCRIPT
let friendlist = ['ade', 'morayo','demola','insigne','shola'];
// console.log(friendlist);
// console.log( 'the 3rd friend which stands on the 2nd index of our array is :\n' + friendlist[2]);

//functions
// a function could have 1 or multiple parameter.
function greet(name){
console.log("hello my good friend " + name)
}
//greet("adewale");
//function with multiple argument
function greetMany(name1,name2){
    console.log("i want you my friends " + name1 + " and " + name2 + " to know i love you ");
}
//greetMany("sinclaire","marvelene");
 function calculate(value){
//console.log("The value in cm is: " + (value * 2.54) + "cm")

const inCm = value * 2.54;
//const display = 'the value in cm is ' + inCm;
return inCm ;
 }
console.log('the value in cm is '+ calculate(100));
const wallHeight = 200;

 const width = calculate(320);
 const height = calculate(wallHeight);

 const dimension = [width,height];
// console.log(dimension);

//function declaration
function addUp(num1, num2){
    return num1 + num2;
}
//function expression
//when using function expression, you can decide to add the expression name
// after the function keyword or not.
const addNum = function(num1,num2){
    return num1 + num2
}

const myValues = [236,234,addUp(120,148)]; // i was able to add element at index 2 because array can take
// any value as its element.
//console.log(myValues);

//Objects in javascript

const person = {
    name: "samson",
    lastname:"roland",
    age:24,
    occupation:"engineer",
    siblings:["enkan","mathew"],
    married:false,

    greetings:function(){
        console.log("hello my good friend")
    }
}
// comparators in javascript
// == used to compare if two values of operands are equal
// while === is used to compare if they are equal and of the same data type.

//switch statement in javascript
// let rand = Math.floor(Math.random() * 10);
// console.log(rand);
const dice =Math.floor(Math.random() * 6);

switch (dice) {
    case 1:
        console.log("you got 1 ")
        break;

    case 2:
        console.log("you got 2 ")
            break;

    case 3:
         console.log("you got 3 ")
                break;
    case 4:
         console.log("you got 4 ")
                break;
    case 5:
        console.log("you got 5 ")
                    break;   
    
    case 6:
         console.log("you got 6 ")
                        break;   
    default:
        console.log("what is your problem, you did not toss the die")
        break;
}

//Loops in javascript
// 1.while loop 2.Do-while loop 3. For loop
//while loop
let myNum = 10;
while (myNum>0) {
    console.log("my number is :" + myNum + " and it is greater than zero")
    myNum--;
}


//Do-while loop
let mySave = 0
do {
  console.log("my savings is increasing and it is : " + mySave);
  mySave += 5;  
} while (mySave<=30);

// for loop
let evenNum = [];
let oddNum = [];
let i ;
// for(i=0; i<=16; i++){
//     if(i % 2 == 0 && i>0){
//         console.log("my even number are : " + i)
//         evenNum.push(i);
//     }else if(i>0){
//         console.log("my odd numbers are :" + i)
//         oddNum.push(i);
//     }

// }
//console.log(evenNum);
//console.log(oddNum);

//TEMPLATE LITERALS
let mes = "htis is my word of faith";

console.log(mes.substring(mes.length-4));
 const age = 30;
 const nomen = "john";

 const sentence1 = "His name is " + nomen + " and he is " + age + " years old";
 const sentence2 = `His name is ${nomen} and he is ${age} years old`
// console.log(sentence1);
// console.log(sentence2);

 const names = ["ade","michael","roland", "zion"];
 const fullname =[];

 const surname = "Oshikomaya";
 for(i=0; i<names.length; i++){
     console.log(names[i]);
   // fullname.push(names[i] + " " + surname)
    fullname.push(`${names[i]} ${surname}`)
 }
// console.log(names);
// console.log(fullname);
const spentOnFood = [20,100,70,50,65];
const spentOnGas = [40,100,300,20,240];

function calculateTotal(arr){ //this function accepts array and return the total of the element in the array
    let total = 0;
    for(i=0; i<arr.length; i++){
       // console.log(arr[i]);
       total += arr[i];
    }
    //console.log(total);
    return total;
}

// const gasTotal = calculateTotal(spentOnGas);
// console.log(gasTotal)
// const foodTotal = calculateTotal(spentOnFood);
// console.log(foodTotal);

// TRUTHY AND FALSY VALUE
// "",'',NaN,0,-0,null and undefine are all falsy value.

//Ternary operator
//  condition?execute if true:execute if false;
let ageCheck = 30;
let myAge,yourAge;
age<=30?console.log("you are below 30 or 30"):console.log("go and marry!");
ageCheck>30?myAge=ageCheck:yourAge=ageCheck;
console.log(yourAge);
// variable lookup, global variable and local variable
// Callback functions in javascript are functions the serve as argument to another function
// Higher order function is any function that accepts other function as argument or returns other function. 

function morning(name){//this method is a callback method
    return `good morning ${name.toUpperCase()}`;
   // console.log(`good morning ${name.toUpperCase()}`)
}

morning("jide");

function dailyGreetings(yourname,morning){// this is the higher order method.
    const myname = "Olanrewaju"
console.log(`${morning(yourname)}, my name is ${myname} `)
}

dailyGreetings("olajide",morning);

//powerful Array method
//forEach,map,filter,find,reduce

// forEach   does not return new  array.
const people = [
    
                {name:"olawale",age:23,Occupation:"developer"},
                {name:"bernard",age:21,Occupation:"footballer"},
                {name:"chukwudi",age:29,Occupation:"lecturer"}

]
 function showPerson(person){// this is a callback function for the forEach method.
     console.log(person);
     }
//console.log(people);// this will display array while the other(forEach) will display the element.
// people.forEach(showPerson);// what this method(forEach) does is that it performs the method passed on every 
 //element of that array.

 const children = ["shadera","mandela","faderera"];
 function concatName(name){
     const surname = "Fabiyi"
     console.log(`${name} ${surname}`);
 }

 //children.forEach(concatName);// method 1 of using forEach

// children.forEach(function(oruko){//method 2 of using it is writing the method as a whole in it
// const familyName = "Fabiyi";
// console.log(`${oruko} ${familyName}`)
// })

//MAP as an array method
//it returns another array
//it does not change the size of the array
//uses value from the original array to make new one.

const figures = [20,18, 30,45];
const added = figures.map(function(val){
    const bonus = 2;
    const tot = bonus + val;
    return tot;
    // if you console log your return,then you wont see the elements in the new array.

})
// these are just 2 different approaches to what we want to achieve.
//console.log(added);
 
function addTwo(val){
    const bonus = 2;
     const tot = bonus + val;
    return tot;
}
 const all = figures.map(addTwo);
 //console.log(all);

 const myPeople = [
    
    {name:"olawale",age:23,Occupation:"developer"},
    {name:"bernard",age:21,Occupation:"footballer"},
    {name:"chukwudi",age:29,Occupation:"lecturer"}

]

const nameWork = myPeople.map(function(person){
//     const glue = person.name + " " + person.Occupation;
// return glue;
return `<h3>${person.name} ${person.Occupation}</h3>`;
})
//document.body.innerHTML = nameWork.join(""); // this displays it.
//console.log(nameWork); //this log it at console.

//Filter as an array method.
// it also returns array
// the size of the array can be manipulated
// returns base on condition.

const villagers = [
    
    {name:"olawale",age:23,Occupation:"developer"},
    {name:"bernard",age:21,Occupation:"footballer"},
    {name:"chukwudi",age:29,Occupation:"lecturer"},
    {name:"folahan",age:19,Occupation:"musician"}
]

const music = villagers.filter(function(person){
return person.Occupation == "musician";
})
//console.log(music);

const musicOrYoung = villagers.filter(function(member){
return member.Occupation=="musician" || member.age<=25;
})

//console.log(musicOrYoung);

//FIND method
//it returns single instance or single object
//returns first match
//great for getting unique value

const workers = [
    
    {name:"olawale",age:23,Occupation:"developer",id:1},
    {name:"bernard",age:21,Occupation:"footballer",id:2},
    {name:"chukwudi",age:29,Occupation:"lecturer",id:3},
    {name:"folahan",age:19,Occupation:"musician",id:4}
]

const person1 = workers.find(function(person){
    //the find method gives preference to the first match, i.e if you have the same object with the same id,
    //it returns the first object in the original array.
    return person.id===1;
});

//console.log(person1);


//REDUCE
//iterates,callback function
//reduces to a single value - number, array or object.
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

// Math in-built class.
// sqrt,sqr,PI and so on


// DATE in javascript.
const date = new Date();// this gives the present date;
const date2 = new Date('21/01/2022'); // this is setting the date yourself.
//console.log(date);

const months =['january','february','march','april','may','june','july','august','september','october', 'november','december'
                ];

const days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

const no = date.getMonth();
   // console.log(months[date.getMonth()]);
   // console.log(months[no]);



                        //DOCUMENT OBJECT MODEL (DOM)
console.dir(document);

const but = document.getElementById("bt");// returns the raw element
 const elementName = but.nodeName;//returns the tag name
 const css = but.style;// returns the style you can perform the element retrieved.
//  but.style.color= "white";
//  but.style.backgroundColor = "blue";

 console.log(but);
 console.log(elementName);
 console.log(css);

// getElementBYId,getElementByTagName,getElementByClass
// querySelector() if you are passing id then #idname or class then .classname
//querySelectAll()
// we have the
// children property
// first-child property returns white space 
//last child property. returns white space.

//previous sibling
//next sibling
                //getElementById
const element = document.getElementById("food");
element.style.color ="orange";
element.style.fontWeight = "bolder";



                //querySelector
const changeOne = document.querySelector(".para");
//console.log(changeOne);
changeOne.style.color = "red";

const lists = document.querySelectorAll(".list"); // this returns nodelist which is an array-like
console.log(lists);
const foodlist = [... lists]; //this line is used for converting array-like objects to proper array.
//console.log(foodlist);
 
const love = "i love you"
const check = love.startsWith('love');
//console.log(check);

foodlist.forEach(function(bal){
    let status = "cooked";
    const st = bal.textContent;
    status = st.startsWith('shar')?"baked":"cooked"; // the ternary operator and
    //if statement performs same function, but i prefer a line of code to many 
//    if(st.startsWith('shar')){
//        status = "baked"
//    }else{
//        status = "cooked"
//    }
    //console.log(status + " " + st); 
})
// nextElementSibling works like nextSibling but this doesnot return white space
// previousElementSibling works like previousSibling but it doesnot return white space since it has been
//              specified that we are sorting after Element.


            //Retrieving Text
// Using nodeValue
// nodeValue property can not be used directly,you access the childNodes(this returns nodeList which
// which is an array-like) then you access the nodeValue by index.
// 
const pa = document.querySelector('#head');
console.log(pa);
const value = pa.childNodes;
console.log(value[0].nodeValue);

//Using textContent
// this gives direct acess to the text .
const me = document.querySelector('.para');
const text = me.textContent;
//getAttribute()
const attr = me.getAttribute('class');
console.log(attr);
console.log(text);

//setAttribute()
// this takes 2 values, the atrribute you want to set and its value.
const parent1 = document.querySelector('.unorder');
const child1 = parent1.firstChild.nextSibling;
console.log(child1);
child1.setAttribute('class','first');

//className and classList.
const cl = document.querySelector('.order');
const nValue = cl.className;
console.log(nValue);
const mValue = cl.firstElementChild;
mValue.className = "color"; // setting a class 
//mValue.className = "color text"; adding more than one class to an element.
const myChild = cl.lastElementChild;
myChild.setAttribute('class','color'); //from this example,i can say setting attribute and assigning class can work
//interchangeably if and only if you are setting class.

// CLASSLIST
const third = document.getElementById("third");
console.log(third);
third.classList.add("color","text");// this means we added 2 classes. Mind you, when we use classList method
//we can simply add as much classes as we want.
//third.classList.remove("text"); // means i want to remove the class text.
