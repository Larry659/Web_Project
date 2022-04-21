
//after 1s red
//after 3s blue
//after 2s green
// In sequence


const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const btn = document.querySelector(".btn");
// setTimeout(()=>{},1000) setTime method is used to trigger and  action after a particular time.
// it takes 2 parameters, which are the function, the time(millisecond)

//the function below will not perform this operation in sequence
// btn.addEventListener("click",()=>{
//     setTimeout(()=>{
//       first.style.color = "red" 
//     },1000)

//     setTimeout(()=>{
//         second.style.color = "blue" 
//       },3000)

//       setTimeout(()=>{
//         third.style.color = "green" 
//       },2000)
// });

//In sequence it will perform the parent function,then then child and followed by the grandchild function
btn.addEventListener("click",()=>{
    setTimeout(()=>{
      first.style.color = "red"
      setTimeout(()=>{
        second.style.color = "blue" 
        
      setTimeout(()=>{
        third.style.color = "green" 
      },2000)
      },3000)
 
    },1000)

    
});


            //Nugget promises : promises helps to avoid callback hell.
        //promise is an object that helps to return a value
        //we use constructor declaration when working with promises
        //the construction accepts a function as a parameter and the function accepts 2 parameters(resolve,reject) 
         // arguments(resolve and reject) are functions on their own
        //async-await
        //consume/use promises
        //Pending,Rejected,Fulfilled
      //       const score = [1,3,6,7];
      //   const promise = new Promise((resolve,reject)=>{
      //     const ran = Math.floor(Math.random() * 3)
      //     if(score.includes(ran)){
      //       resolve(ran)
      //     }
              
      //           reject('it does not belong to the array')
      //   });

      //  console.log(promise);
        //to access the resolved  value, we use .then()
        //to access the rejected value, we use .catch()
        
       // promise.then((data)=>console.log(data)).catch((err)=>console.log(err));

        //the data and err are the value passed into the resolve and reject methods respectively


                //javascript nuggets
          // async/await
          // async must be present, always returns a promise
          //await waits until promise is settled
          // error handling - try/ catch block

          // const example = async()=>{ //this may/ maynot have parameter
          //   return `hello there`
          // };

          // async function someFunc(work){ // this may/maynot have parameter
          //   const greet = await example();
          //   console.log(`${greet} ${work}`);
          // }

          // someFunc("doctor");
          
          const users = [{id:1,name:"samson"},
                         {id:2,name:"adeola"},
                          {id:3,name:"daniel"}
                       ]

         const articles = [
           {userid:1,article:['one','two','three']},
          {userid:2,article:['four','five','six']},
          {userid:3,article:['seven','eight']}
                     ]
                    
        function getUser(name){
        return  new Promise((resolve,reject)=>{
            const user = users.find((user)=>{
              return user.name===name;
            })
            if(user){
             return  resolve(user)
            }
            else{
               reject(`No such user with the name :${name} `)
            }
          }

        )}

        function getArticle(userid){
          return new Promise((resolve,reject)=>{
           const userArticle = articles.find((article)=>{
            return article.userid===userid
           })
           if(userArticle){
             return resolve(userArticle.article)
           }
           else{
             reject('invalid user')
           }}
         ) }
        console.log(getArticle(3));
// getUser("daniel")
// .then((person)=>{getArticle(person.id)
// })
// .then((arti)=>{console.log(arti)}
// ).catch((err)=>{console.log(err)})
          // alternatively

getData = async ()=>{
  try {
    const person = await getUser('adeola');
    if(person){
      const art = await getArticle(person.id)
      console.log(art);
    }else{
      console.log('invalid user or incorrect argument passed')
    }
    
  } catch (error) {
    console.log(error);
  }
}

getData();

   //fetch API -browser API for http(ajax)request
   //Get Requests, supports other methods as well
   //returns promise.

   const url ='http://www.course-api.com/react-tours-projects';
// fetch(url)
// .then((response)=>{
//   response.json();
// })
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)})
                //USING ASYNC METHOD
//  const getTour = async ()=>{
//    try {
//      const respo = await fetch(url);
//      console.log(respo);
//      const data = await respo.json();
//      console.log(data);
//    } catch (error) {
//      console.log(error);
//    }
//  }
  //getTour();


              //fetch errors
        //only throws error if it cannot resolve.
        //Error response still a response(400-500);
   const getTour = async ()=>{
     try {
     const respo = await fetch(url);
     if(!respo.ok){
       const message =`there was an error "${respo.status} and ${respo.statusText}"`
       throw new Error(message);
     }
            const data = await respo.json();
            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }

        getTour();


        //Spread Operator ... 
// Allows and iterable to spread/expand individually inside the receiver
//split into single item and copy them

const udemy = "udemy";

const letters = [... udemy];
console.log(letters);

const boys = ["banji","daniel","gbemileke"];
const girls = ["ronke","laide","shade"];

const bestFriend = "joshua";

const friends = [...boys,...girls,bestFriend];
// console.log(friends);
//reference

//copy
const newFriend = [...friends];
newFriend[0]="samuel"
console.log(friends);
console.log(newFriend);

//ES2018 - Es8 object

const person = {name:"wale",job:"developer"};
 const newPerson = {...person,age:23,gender:"male",name:"balonga"};//updating and adding another key and value to it, just add it after the comma
 console.log(person);
 console.log(newPerson);

           // Rest operators...
    //gather/collects items
    //destructuring,functions
    //placement important, careful with the same name
    //rest when declare function,spread when invoking function
            //Arrays
const fruits = ['banana','orange','pineapple','watermelon'];
const[fruit1,fruit2,...otherFruits]=fruits;//destructuring the first and second element and
//returning the rest as an array
// Note: array methods can be used on (otherFruits), since it is an array.
console.log(fruit1,otherFruits,fruit2);

          //Object
      const man = {name:"rancho",job:"footballer",age:27};
      const{name,...otherProperties}=man;
      //otherProperties is just an identifier to hold the rest of the properties in the array/
      //(...rest) must be at the end of your destructuring.
      console.log(name,otherProperties);

          //function
  //rest when we declare a function and spread when we invoke the function
  const getAverage=(name,...score)=>{
console.log(name);
console.log(score);
const average = score.reduce((total,item)=>{
return total += item},0)/score.length;
console.log(average);

  }

  getAverage(man.name,56,34,56,89);