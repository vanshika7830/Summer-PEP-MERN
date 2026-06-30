/*
function scopes(){
    let num1 = 7;
    if(true){
        // num1 = 8;
        // console.log(num1);

        // let num2 = 9;
        // console.log(num2);

        const num3 = 10;
        console.log(num3);
    }
    console.log(num1);
    // console.log(num2); 
    // console.log(num3);
}

scopes();

*/

// Difference between let, var, const

//                     let             const          var
// ------------------------------------------------------------------
// Scope               block           block          functional
// ------------------------------------------------------------------
// Hoisting            hoisted(TDZ)    hoisted(TDZ)   fully hoisted
// ------------------------------------------------------------------
// Re-declaation       No              No             Yes
// ------------------------------------------------------------------
// Re-assignment       Yes             No             Yes


/*

let num1 = 5;
var num2 = 6;
const num3 = 7;

// let num1 = 10; Not allowed re-declare
// var num2 = 7;  Allowed
// const num3 = 99;  Not allowed 

*/
// Closure
/*
function createBankAccount(initialBalance){
    let balance = initialBalance;
    return{
        deposit(amount){
            balance += amount;
            console.log(`Total balance after ${amount} deposit: ${balance}`);
        },
        withdraw(amount){
            if(amount > balance){
                console.log(`Cannot withdraw ${amount}, available balance: ${balance}`);
            }
            else{
                balance -= amount;
                console.log(`Withdraw ${amount} available balance: ${balance}`);
            }
        },
        getBalance(){
            return "Total Balance is: "+balance;
        }
    };
}

const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(500);
console.log(account.getBalance());
*/


//Asynchronous JS - Executed by runtime environment or WebAPI - macrotas queue or microstask queue - eventlopp - callstack

// setTimeout Does task after a time
/*
console.log("Start");
setTimeout(()=>{
    console.log("Hello")
},100)
console.log("End")
*/

// Continue running until we stop it
/*
console.log("Start");
const intervalId = setInterval(()=>{
    console.log("Hello");
},1000)

setTimeout(() => {
    clearInterval(intervalId);
}, 5000);
*/

/*
Call Stack
    ↓
Current synchronous code finishes
    ↓
Microtask Queue (empty it completely) - Promises
    ↓
Macrotask Queue (run one task) - s.
etTimeOut
    ↓
Microtask Queue again
    ↓
Next Macrotask */

/*
console.log("1");
console.log("2");
setTimeout(()=>{console.log("3")
},3000)
setTimeout(()=>{console.log("4")
},1000)
console.log("5");
setTimeout(()=>{console.log("6")
},2000)
*/