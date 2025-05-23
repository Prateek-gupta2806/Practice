



// const getPromise = () => {
//      return new Promise ((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         // reject("netwrok error")

//     });

// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);

// });

// promise.catch((err) => {
//     console.log("rejected", err);

// });

// function asyncFunc1() {
//     return new Promise ((resolve, reject) => {
//         setTimeout( () => {
//             console.log("some data1");
//             resolve("success");
//         },4000);
//     });
// };

// function asyncFunc2() {
//     return new Promise ((resolve, reject) => {
//         setTimeout( () => {
//             console.log("some data2");
//             resolve("success");
//         },4000);
//     });
// };

// console.log ("Fetching data1....");
// // asyncFunc1().then((res) => {
// //     console.log ("Fetching data2....");
// //     asyncFunc2().then((res) => {});
// // });



// function getData(dataId) {
//     return new Promise ((resolve, reject) => {
//         setTimeout( () => {
//             console.log("data", dataId);
//             resolve("success");
            
//         },2000);
//     });

// };

// async function getAlldata() {
//     console.log ("getting data1....");
//     await getData(1);
//     console.log ("getting data2....")
//     await getData(2);
//     console.log ("getting data3....")
//     await getData(3);
// }

// (async function () {
//     console.log ("getting data1....");
//     await getData(1);
//     console.log ("getting data2....")
//     await getData(2);
//     console.log ("getting data3....")
//     await getData(3);
// }) ();

// const URL = "https://cat-fact.herokuapp.com/facts"
const URL = "https://images.dog.ceo/breeds/pariah-indian/The_Indian_Pariah_Dog.jpg"

let promise = fetch (URL);
console.log(promise);

const getFacts = async () => {
    console.log("getting data......")
    let response = await fetch(URL);
    console.log(response); // JSON format  
}


  