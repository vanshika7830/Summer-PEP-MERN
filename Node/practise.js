const fs = require('fs')
console.log("Start");

fs.readFile('hello.txt','utf-8',(err, data) => {
    if(err){
        console.log("Error while reading file");
    }
    else{
        console.log(data);   
    }
})

// fs.writeFile('hello.txt','I am Vanshika',(err) => {
//     if(err){
//         console.log("Error while writing file");
//         return;
//     }
//     else{
//         console.log("Written");   
//     }
// })

// fs.appendFile('hello.txt','\nLearning Node',(err) => {
//     if(err){
//         console.log("Error while writing file");
//         return;
//     }
//     else{
//         console.log("Appended");   
//     }
// })

// fs.unlink('hello.txt',(err) => {
//     if(err){
//         console.log("Error while deleting file");
//         return;
//     }
//     else{
//         console.log("Deleted");   
//     }
// })

console.log("End");