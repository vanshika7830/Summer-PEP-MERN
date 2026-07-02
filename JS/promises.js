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

/**
 * promise is an object that represents the eventual completion (or failure) of an
 *  asynchronous operation and its resulting value. It allows you to write asynchronous code 
 * in a more manageable way, avoiding the "callback hell" problem seen in the previous example.*/

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