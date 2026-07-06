/*
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

function step4(callback) {
    setTimeout(() => {
        console.log("Step 4 completed");
        callback();
    }, 1000);
}

// Callback Hell
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("All steps completed!");
            });
        });
    });
});
*/

/**
 * promise is an object that represents the eventual completion (or failure) of an
 *  asynchronous operation and its resulting value. It allows you to write asynchronous code 
 * in a more manageable way, avoiding the "callback hell" problem seen in the previous example.*/
/*
const promise=new Promise((resolve, reject) => {
    const success = true; 
    if (success) {
        resolve("Promise resolved successfully!");
    }
    else{
        reject("Promise rejected!");
    }
});
promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});


function logincallback(){
    console.log("Login successful");
    setTimeout(() => {
        console.log("login successful.");
    }, 1000);
}

function getorders(){
    console.log("Fetching orders...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order data is loaded.");
        }, 2000);
    });
}
login()
.then(() => {
    return getorders();
})
.then((orders) => {
    console.log(orders);
});
*/

function getProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Product Loaded");
            }
            else{
                reject("Promise failed");
                
            }
        },3000)
    })
}

function getOffers(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let success = false;
            if(success){
                resolve("Offer Loaded");
            }
            else{
                reject("Offer Request Failed");
                
            }
        },2000)
    })
}

function getCategories(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let success = false;
            if(success){
                resolve("Categories Loaded");
            }
            else{
                reject("Categories Request Failed");
                
            }
        },5000)
    })
}

/*
| Method                 | Waits For       | If One Rejects      | Result                  |
| ---------------------- | --------------- | ------------------- | ----------------------- |
| `Promise.all()`        | All fulfilled   | Rejects immediately | Array of values         |
| `Promise.allSettled()` | All settled     | Doesn't matter      | Array of status objects |
| `Promise.race()`       | First settled   | Rejection can win   | First result/error      |
| `Promise.any()`        | First fulfilled | Ignores rejects     | First success           |

*/

/*
Promise.all([getProducts(), getOffers(), getCategories()])
.then((data) => {
    console.log("Resolved: ",data);
})
.catch((err) => {
    console.log(err);
    
})
*/


Promise.allSettled([getProducts(), getOffers(), getCategories()])
.then((data) => {
    console.log("Resolved: ",data);
})
.catch((err) => {
    console.log(err);
    
})
.finally(()=>{
    console.log("Finally");
})