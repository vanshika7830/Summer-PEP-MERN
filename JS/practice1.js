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
