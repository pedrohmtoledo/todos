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
            elements[key].value = task[key];
        }
    }
    elements["cardid"].value = cardId;
}

// set new values for the task that user has edited
export function editTaskOnLocalStorage(values, id){
    const task = new Task(values.title, values.description, values.datedue, values.priority);//create new 
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