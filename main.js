let todoItemsContainer = document.getElementById("todoItemsContainer");
let addBtn = document.getElementById("addBtn");




let array = [
    { name: "Learn HTML", unqid: 1 },
    { name: "Learn Python", unqid: 2 },
    { name: "Learn JavaScript", unqid: 3 },
];


// for trail run 

function addCheck(checkboxId, labelId) {
    let checkboxElement = document.getElementById(checkboxId);
    checkboxElement.checked;
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
}

function removeElement(todo) {
    let labelElement = document.getElementById(todo);
    todoItemsContainer.removeChild(labelElement);
}

function dynamicTodos(items) {
    let checkboxId = "checkbox" + items.unqid;
    let labelId = "label" + items.unqid;
    let todo = "todo" + items.unqid;

    let todoElement = document.createElement("li");
    todoElement.classList.add("d-flex", "flex-row", "todo-item-container");
    todoElement.setAttribute("id", todo);
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "checkbox");
    inputElement.setAttribute("id", checkboxId);
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function () {
        addCheck(checkboxId, labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("d-flex", "flex-row", "label-container");

    todoElement.appendChild(labelContainer);

    let labelInput = document.createElement("label");
    labelInput.setAttribute("for", checkboxId);
    labelInput.setAttribute("id", labelId);
    labelInput.textContent = items.name;
    labelInput.classList.add("checkbox-label");
    labelContainer.appendChild(labelInput);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("delete-icon", "fa-regular", "fa-trash-can");

    deleteIcon.onclick = function () {
        removeElement(todo);
    };

    deleteIconContainer.appendChild(deleteIcon);
}

let count = array.length;

addBtn.onclick = function () {
    let userInputElement = document.getElementById("todoUserInput");
    let userInput = userInputElement.value;

    if (userInput === "") { 
        alert("Please enter a user input");
        return;
    }


    count += 1;
    let newTodo = {
        name: userInput,
        unqid : count
    }
    dynamicTodos(newTodo);
    userInputElement.value = "";

};

for (let items of array) {
    dynamicTodos(items);
}
