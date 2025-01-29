import Task from "./todos";


export function uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// get all values from dialog box that user has inserted to later add to local storage
export function getDialogValues() {
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("datedue").value;
    const priority = document.getElementById("priority").value;
    const cardid = document.getElementById("cardid").value;
   
    return { title, description, dueDate, priority, cardid};
}

// get elements from dialog to handle dom
export function getDialogElements() {
    const dialog = document.querySelector("#add-task-dialog");
    const form = document.getElementById("task-form");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const dueDate = document.getElementById("datedue");
    const priority = document.getElementById("priority");
    const cardid = document.getElementById("cardid");
    
    return { dialog, form, title, description, dueDate, priority, cardid};

}


export function insertTaskToLocalStorage(values) {
    const task = new Task(values.title, values.description, values.dueDate, values.priority);//create new task
    localStorage.setItem(uniqueId(), JSON.stringify(task)); // add new task to local storage
}

// when user adds a task and open a dialog to fill, the values should be reseted, this functions does that
export function resetDialogValues(elements){
    for(const key in elements){
        elements[key].value = "";
    }
}

// this function puts the tasks values on the dialog fields when user clicks edit button

export function setDialogValues(elements, cardId){
    const task = JSON.parse(localStorage.getItem(cardId));
    for(const key in elements){
        if(key != "cardid"){
            console.log(task[key])
            elements[key].value = task[key];
        }
    }
    elements["cardid"].value = cardId;
}

// set new values for the task that user has edited
export function editTaskOnLocalStorage(values, id){
    console.log(values)
    const task = new Task(values.title, values.description, values.dueDate, values.priority);//create new 
    localStorage.setItem(id, JSON.stringify(task)); // override the values of that task in local storage

}

export function deleteTaskFromLocalStorage(id){
    localStorage.removeItem(id);
}

export function clearAllCards() {
    const todos = document.querySelector(".todos"); //get todos container to clear everything before displaying all card in order to not display card repeatedly
    
    while(todos.firstChild) {
        todos.removeChild(todos.firstChild);
    }
}

export function displayCard(card){
    // todo
}

export function createACard(task, key) {
   
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", key);

    const cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card-header");

    const cardTitle = document.createElement("div");
    cardTitle.setAttribute("class", "card-title");

    const cardPriority = document.createElement("div");
    cardPriority.setAttribute("class", `card-priority ${task.priority.toString().toLowerCase()}`);

    const cardDivider = document.createElement("div");
    cardDivider.setAttribute("class", "card-divider");

    const cardDescription = document.createElement("div");
    cardDescription.setAttribute("class", "card-description");

    const cardDueDate = document.createElement("div");
    cardDueDate.setAttribute("class", "card-duedate");

    const cardButtons = document.createElement("div");
    cardButtons.setAttribute("class", "card-buttons");

    const cardEditButton = document.createElement("button");
    cardEditButton.setAttribute("class", "card-edit");
    cardEditButton.setAttribute("id", key);

    const cardDeleteButton = document.createElement("button");
    cardDeleteButton.setAttribute("class", "card-delete");
    cardDeleteButton.setAttribute("id", key);

    
    cardTitle.textContent = task.title;
    
    cardPriority.textContent = task.priority;
    
    cardDescription.textContent= task.description;
    
    cardDueDate.textContent = `Due date: ${task.dueDate}`;
    
    cardEditButton.textContent = "Edit";
    cardDeleteButton.textContent = "Delete";

    cardHeader.append(cardTitle, cardPriority);
    cardButtons.append(cardEditButton, cardDeleteButton)

    card.append(cardHeader, cardDivider, cardDescription, cardDueDate, cardButtons)
    return card;
}

export function highlightSelectedFilter(filter){
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        if(button.id === filter){
            button.classList.add("selected")

        } else {
            button.classList.remove("selected")
        }
         

    })

}