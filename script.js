



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
// asyncFunc1().then((res) => {
//     console.log ("Fetching data2....");
//     asyncFunc2().then((res) => {});
// });



function getData(dataId, getNextData) {
    return new Promise ((resolve, reject) => {
        setTimeout( () => {
            console.log("data", dataId);
            resolve("success");
            if (getNextData) {
              getNextData();
            }
        },5000);
    });

};

 getData(1)
    .then ((res) => {
        return getData(2);
})
 .then ((res) => {
    return getData(3);
})
.then ((res) => {
    console.log(res)
});








  