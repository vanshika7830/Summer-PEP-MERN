
const button = document.getElementById("btn");
const title = document.getElementById("title");
const description = document.getElementById("description");
const todoList = document.getElementById("todo-list");
button.addEventListener("click", function () {
    if (title.value.trim() === "" || description.value.trim() === "") {
        alert("Please fill all fields");
        return;
    }
    const li = document.createElement("div");
    li.classList.add("todo-item");
    const heading = document.createElement("h3");
    heading.innerText = title.value;
    const para = document.createElement("p");
    para.innerText = description.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
    deleteBtn.style.backgroundColor="red";
    li.appendChild(heading);
    li.appendChild(para);
    li.appendChild(deleteBtn);

    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click",()=>{
        const newTitle = prompt("Edit Title", heading.innerText);
        const newDescription = prompt("Edit Description", para.innerText);
        if(newTitle != null && newTitle.trim() !== ""){
            heading.innerText = newTitle;
        }
        if(newDescription != null && newDescription.trim() !== ""){
            para.innerText = newDescription;
        }
    })
    li.appendChild(editButton);

    todoList.appendChild(li);
    title.value = "";
    description.value = "";

});