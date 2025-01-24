import Todos from "./todos.js"

function openTaskDialog() {
    const dialog = document.querySelector("#add-task-dialog");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const datedue = document.getElementById("datedue");
    const priority = document.getElementById("priority");
    title.value = "";
    description.value = "";
    datedue.value = "";
    priority.value ="";
    dialog.show()

}

function submitTask(e) {

    const form = document.getElementById("task-form");
    if (!form.checkValidity()){
        e.preventDefault();
    

    } else {
        const dialog = document.querySelector("#add-task-dialog");
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const datedue = document.getElementById("datedue").value;
        const priority = document.getElementById("priority").value;
        const task = new Todos(title, description, datedue, priority);
        console.log(task)
        e.preventDefault();
        dialog.close()

    }
    
}

export { openTaskDialog, submitTask }