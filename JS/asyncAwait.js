// function hello(){
//     return Promise.resolve('Hello World');
// }
// hello().then((data) => {
//     console.log(data);
    
// })


// async function hello() {
//     return "hello"
// }

// hello().then(data => console.log(data))

function login() {
    return new Promise((resolve) => {
        console.log("Logging in...");

        setTimeout(() => {
            console.log("Logging successful...");
            resolve();
        }, 5000);
    });
}

function getUser() {
    return new Promise((resolve) => {
        console.log("Getting user...");

        setTimeout(() => {
            console.log("User is loaded...");
            resolve();
        }, 2000);
    });
}
function getOrder() {
    return new Promise((resolve) => {
        console.log("Getting order...");

        setTimeout(() => {
            console.log("Order data is loaded...");
            resolve();
        }, 1000);
    });
}
function getOrderDetails() {
    return new Promise((resolve) => {
        console.log("Getting order details...");

        setTimeout(() => {
            console.log("Order details loaded...");
            resolve();
        }, 3000);
    });
}
async function loadData() {
    await login();
    await getUser();
    await getOrder();
    await getOrderDetails();
}

loadData();