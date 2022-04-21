function averageValue(arr) {
  // let finalValue = 0;
  let sumValue = 0
  //    if(arr.lenght>0){
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index]
    sumValue += element
  }
  let finalValue = sumValue / arr.length
  return finalValue
  //    }
}

let myArray = [3, 7, 1, 9]
console.log(averageValue(myArray))

// const getAverageAnswer = (arr) =>  {
//     let sum = 0;
//     if (arr.length === 0){
//         return 0
//     }
//     for (let i = 0; i < arr.length; i++){

//         sum += arr[i];
//     }
//     const ans = sum/arr.length
//     return ans
// }

// console.log(getAverageAnswer(myArray));
const scoreList = [20, 18, 30, 45]
const newScoreList = scoreList.map(function (val) {
  const tot = 2 + val
  return tot
  // if you console log your return,then you wont see the elements in the new array.
})
console.log(newScoreList)

//createElement()
// createTextNode()
// element.appendChild()
const insideElement = document.querySelector('#heading')

const newElement = document.createElement('h3') // create the element
const newText = document.createTextNode('This is a new era') //create the text, meaning adding a text.
newElement.appendChild(newText) //add the text to the element
document.body.appendChild(newElement) // add both the element and the text in the body.

//insertBefore("element","location")
document.body.insertBefore(newElement, insideElement)
//replaceChild(newElement,oldElement)
//prepend()
//innerText()

const newElemnt2 = document.createElement('h2')
newElemnt2.innerText = `i'm a dynamic heading`
document.body.prepend(newElemnt2)

//remove() this removes the element selected
//removeChild()

// innerHtml returns the whole html structure
const head = document.getElementById('heading')
const graph = document.getElementById('par')
console.log(graph.innerHTML)

//textContent returns just the text in it
// stop 8:53
const hh = document.querySelector('#head')
console.log(hh.textContent)

// function getValue(name, score) {
// 	console.log(`${name} got ${score}`);
// }
const getValu = (name, score) => {
  console.log(`${name} got ${score}`)
}

const sumVale = (a) => {
  return a + 2
}

const score = [45, 23, 55]
const changeScor = scores.map(function (score) {
  return score + 5
})

const newScore = scores.map((score) => {
  return score + 5
})

console.log(changeScore)

// function getValue(name, score) {
// 	console.log(`${name} got ${score}`);
// }

const getValue = (name, score) => {
  console.log(`${name} got ${score}`)
}

const sumVales = (a) => {
  return a + 2
}

const scores = [45, 23, 55]
const changeScore = scores.map(function (score) {
  return score + 5
})

const newScores = scores.map((score) => {
  return score + 5
})

console.log(changeScore)
