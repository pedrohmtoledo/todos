import Task from "./todos";


function uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getDialogValues() {
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("datedue").value;
    const priority = document.getElementById("priority").value;
    const cardid = document.getElementById("cardid").value;
   
    return { title, description, dueDate, priority, cardid}
}

function getDialogElements() {
    const dialog = document.querySelector("#add-task-dialog");
    const form = document.getElementById("task-form");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const dueDate = document.getElementById("datedue");
    const priority = document.getElementById("priority");
    const cardid = document.getElementById("cardid");
    
    return { dialog, form, title, description, dueDate, priority, cardid}

}


function insertTaskToLocalStorage(values) {
    const task = new Task(values.title, values.description, values.dueDate, values.priority);//create new task
    localStorage.setItem(uniqueId(), JSON.stringify(task)); // add new task to local storage
}

// when user adds a task and open a dialog to fill, the values should be reseted, this functions does that
function resetDialogValues(elements){
    for(const key in elements){
        elements[key].value = ""
    }
}

// this function puts the tasks values on the dialog fiels when user clicks edit button

function setDialogValues(elements, cardId){
    const task = JSON.parse(localStorage.getItem(cardId))
    for(const key in elements){
        if(key != "cardid"){
            elements[key].value = task[key]
        }
    }
    elements["cardid"].value = cardId;
}

function editTaskOnLocalStorage(values, id){
    const task = new Task(values.title, values.description, values.datedue, values.priority);//create new 
    localStorage.setItem(id, JSON.stringify(task)); // override the values of that task in local storage

}

export { uniqueId, insertTaskToLocalStorage, getDialogValues, getDialogElements, editTaskOnLocalStorage, resetDialogValues, setDialogValues }