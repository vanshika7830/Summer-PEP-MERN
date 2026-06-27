console.log("JS Loadeed");

const heading = document.getElementById("h1")                //Selects by if
const paraClass = document.getElementsByTagName("p")        //Return HTML Collection


const paragraph = document.getElementsByClassName("para")

paragraph.innerText = "<p>Hi</p>"               //Only text is returned

paragraph.innerHtml = "<p>Hi</p>"                  //Text in BOLD, extra Tag with this also be returned


const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    alert("Clicked");
});

