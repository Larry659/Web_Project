//Javascript Nugget
//ECMA 2022
//at()-takes integer and returns the element at that index- string, array.
//Top level awaits- basic examples.

const statement = 'this is my new home'

console.log(statement.length)
const newState = statement.substring(statement.length - 4)
console.log(newState)
const last = statement.at(-4)
console.log(last)

const ages = [45, 34, 65, 23, 98, 12]
console.log(ages.at(-1)) //negative value returns the item from the back
console.log(ages.at(1)) // positive value returns items from the front

//Destructuring Array
//fast/easier way to access/unpack variables from Array

const fruits = ['orange', 'banana', 'apple']
const friends = ['rowland', 'ayinla', 'beatrice']

const [first, second] = friends
const [value1, , value3] = friends // when you want to omit the next index,you omit with a comma.
console.log(first, second)
console.log(value1, value3)

//Destructuring Object
//fast/easier way to access/unpack variables from object

const bob = {
  name: 'bob',
  lastname: 'richard',
  city: 'chicago',
  sibling: {
    sister: 'magret',
  },
}

const {
  name,
  lastname,
  city: loc,
  sibling: { sister: hisSister },
} = bob
//the property names must be used when destructuring object and order doesnot matter.
//you can destructure properties needed.
// city:loc is an alias, like giving city a nickname, so you access it via its nickname;

console.log(name, lastname, loc, hisSister)
// Destructuring object inside the block
function greetMe(person) {
  const { lastname, city } = person
  console.log(`${lastname} is from ${city}`)
}

//Destructuring object as an argument
// const greetMe=function({lastname,city}){
//     console.log(`${lastname} is from ${city}`)
// }

greetMe(bob)

// const nw = new Date("10-02-2022 22:40:30");
// console.log(nw);
// console.log(nw.getMonth());
// console.log(nw.getDay());
// console.log(nw.getTime());
// console.log(nw.getHours());
// console.log(nw.getMinutes());
// console.log(nw.getSeconds());

const studList = ['shola', 'ade', 'morenike', 'denvar', 'willie']
const [name1, , , , lastName] = studList //the first and the last element were destructured from the array
console.log(lastName)
//UNIQUE VALUE
const menu = [
  { name: 'vegetable', category: 'breakfast' },
  { name: 'egg', category: 'breakfast' },
  { name: 'amala', category: 'dinner' },
  { name: 'yam', category: 'lunch' },
  { name: 'pasta', category: 'dinner' },
  { name: 'snacks', category: 'lunch' },
]

const menus1 = menu.map((item) => {
  //returns all the instances
  return item.category
})

const menus2 = [
  //the ... converts it to array.
  'all',
  ...new Set(
    // new set-narrows down.
    menu.map((item) => {
      return item.category
    })
  ),
]
console.log(menus1)
console.log(menus2)
