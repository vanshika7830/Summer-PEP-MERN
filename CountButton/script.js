
// ------------------------------Count Button--------------------------
const value = document.getElementById("val");

const add = document.getElementById("plus");
const sub = document.getElementById("minus");

add.addEventListener("click",()=>{
    value.innerText = Number(value.innerText)+1;
})

sub.addEventListener("click",()=>{
    if(Number(value.innerText) > 0){
        value.innerText = Number(value.innerText)-1;
    }
})