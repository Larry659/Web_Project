// let scores = [1, 2, 3, 4, 5, 6, 7, 8]
// scores.forEach((num) => {
//   console.log(num * 2)
// })

// const ourValues = scores.map((num) => {
//   const result = num * 2
//   return result
// })
// console.log(ourValues)

// const players = [
//   { id: 1, name: 'taofeek', occupation: 'lawyer' },
//   { id: 2, name: 'simi', occupation: 'singer' },
//   { id: 3, name: 'lanre', occupation: 'developer' },
//   { id: 4, name: 'garuba', occupation: 'footballer' },
// ]

// const result2 = players.find((player) => {
//   return player.id === 1
// })
// console.log(result2)

// const result3 = players.filter((player) => {
//   return player.id === 1 || player.name == 'lanre'
// })
// console.log(result3)

// const score = [1, 3, 6, 7]
// // console.log(score.length);
// const prom = new Promise((resolve, reject) => {
//   const ran = Math.floor(Math.random() * 5)
//   if (score.includes(ran)) {
//     resolve(score)
//   }

//   reject('it does not belong to the array')
// })

// console.log(prom)
// // to access the resolved  value, we use .then()
// // to access the rejected value, we use .catch()

// prom
//   .then((data) => {
//     console.log(data)
//   })
//   .then((arr) => {})

//   .catch((err) => console.log(err))

// const ojo = [
//   'sunday',
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thurday',
//   'friday',
//   'saturday',
// ]
// const date1 = new Date()
// console.log(ojo[date1.getDay()])

// const test = ojo.map((vdo) => {
//   return `Good morning,this is ${vdo} morning`
// })

// console.log(test)

const limit = 8
let i = 1
let j = 1
let multiple = i * j
// any output or log outside a loop statement will print the last value of the iteration value
for (i = 1; i <= limit; i++) {
  for (j = 1; j <= 6; ++j) {}
  console.log('-----------------------')
  multiple = i * j
  console.log(i + '*' + j + '=' + multiple)
}
const now = new Date()
console.log(now.getFullYear() - 5)
