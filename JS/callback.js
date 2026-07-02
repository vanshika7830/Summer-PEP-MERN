// Callback - when a function is passed as argument to another function to make async operation execute sequentially. 

function one(){
    console.log("One");
}

function two(one){
    one();
    console.log("Two");
}
two(one);
// two(one()); 
//  - can't do this because the function one is immediately executed and the value becomes undefined


function greet(name){
    console.log(`Hello ${name}`);
    
}

function callGreet(callback){
    callback();
}
callGreet(() => {greet("John")});


function login(callback){
    console.log("Logging in...");
    setTimeout(()=>{
        console.log("Logging successful...");
        callback();
    },5000)
}

function getUser(callback){
    console.log("Getting user...");
    setTimeout(()=>{
        console.log("User is loaded...");
        callback();
    },2000)
}

function getOrder(callback){
    console.log("Getting order...");
    setTimeout(()=>{
        console.log("Order data is loaded...");
        callback();
    },1000)
}

function getOrderDetails(){
    console.log("Getting order details...");
    setTimeout(()=>{
        console.log("Order details is loaded...");
    },3000)
}

login(()=>{
    getUser(()=>{
        getOrder(()=>{
            getOrderDetails();
        })
    });
})
