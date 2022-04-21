// CORE PRINCIPLES OF EVENT
//1.select element
//2. addEventListener()
//3.what even,what to do

// const btn = document.querySelector('.btn');
// const heading = document.querySelector('#head');
// btn.addEventListener('click',function(){
//     heading.classList.add('red');
// })
// btn.addEventListener('click',function(){
//     const head = heading.classList.contains('red');
//     if(head){
//          heading.classList.remove('red');
//     }else{
//         heading.classList.add('red');
//     }
// })
//MOUSE EVENT
//mouseup - when button is released
//mousedown - when button is pressed
//mouseenter - when move onto an element
//mouseleave- when move out of an element

//KEY EVENT
//keypress - when key is pressed
//keyup - when key is released
//keydown - when key is down.

// const inputText = document.querySelector('#field');
// //console.log(inputText);
// inputText.addEventListener('keypress',function(){
//     console.log('you have pressed a key');
// })

const inputText = document.querySelector('#field')
inputText.addEventListener('keydown', function () {
  console.log('you have pressed a key down')
})
//const inputText = document.querySelector('#field');
//console.dir(inputText); //to check all the properties of a component.
//inputText.addEventListener('keyup',function(){
//  console.log(inputText.value);
//});

// event object argument e, evt
// info about trigerred event
//event.type helps to get the type of event trigerred on an element
//event.currentTarget
// this keyboard
//preventDefault()--- prevents default behaviour of an element.
const heady = document.querySelector('h1')
const button = document.querySelector('.btn')
heady.addEventListener('click', function (event) {
  console.log(event.currentTarget)
})
button.addEventListener('click', function (event) {
  console.log(event)
  console.log(event.currentTarget)
  event.currentTarget.classList.add('blue')
  console.log(event.type)
})
//currentTarge() identifies the element on which the event handler is attched to.
//target() identifies the element on which the event occur.

//Allow  select dynamic element.
//event propagation....order the event are fired.
//event bubbling......click element then bubble up- default
//event capturing---fires at the root(parent) and fires until it reached the target(least child).
// capturing occurs from window to the target element.
// const container = document.querySelector('.container');
// const list = document.querySelector('.listitem');

// function showBubbling(event){
//     console.log('current target',event.currentTarget);
//     console.log('target',event.target )
// }

// function stopPropagation(event){
//     event.stopPropagation();
// }

//container.addEventListener('click',showBubbling);

//list.addEventListener('click',showBubbling);
// list.addEventListener('click',showBubbling );
// document.addEventListener('click',showBubbling);
// window.addEventListener('click',showBubbling);
//  list.addEventListener('click',showBubbling, {capture:true});
//  document.addEventListener('click',showBubbling, {capture:true});
//  window.addEventListener('click',showBubbling, {capture:true});

// Summit event listener
// prevent default
//how to get a value
const form = document.getElementById('form')
const password = document.getElementById('password')
const nom = document.getElementById('name')
console.log(nom)

form.addEventListener('submit', function (e) {
  console.dir(e)
  console.log(e.target)
  console.log('form submitted') // using this,it logged into the console for a sort time and then disappear
  //to prevent this, you have to prevent default.
  e.preventDefault()
  console.log(nom.value)
  console.log(password.value)
})

//    Web storage API - provided by browser
//session storage, local storage
// setItem,getItem,removeItem,clear

localStorage.setItem('name', 'john')
sessionStorage.setItem('name', 'john')
// The difference between localStorage and sessionStorage is that localStorage
//remain intact even if the browser is refreshed. while anything stored in the session
// storage is available when that same tab is still opened.
// These are used to get or transfer object from the localStorage.
// JSON.stringify(),JSON.parse()
//JSON.string() converts javascript object to JSON format.
//JSON.parse()   to convert the string into a JavaScript object:
const friends = ['john', 'james', 'gonzalez']
localStorage.setItem('friends', friends) // this will store it as a string and not our
//intented array.
// To store it as an array, we will use JSON.stringify();
localStorage.setItem('friends', JSON.stringify(friends))
const friend = JSON.parse(localStorage.getItem('friends'))
console.log(friend[0])
