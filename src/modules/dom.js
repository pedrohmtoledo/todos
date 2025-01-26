import "../styles/static.css"
import "../styles/cards.css"
import taskIMg from "../img/task.svg"
import Task from "../modules/todos.js"
import Projects from "../modules/project.js"
import renderStatic from "../modules/static.js"
import "../styles/dialog.css"
import { openTaskDialog, submitTask, editTaskDialog } from "../modules/task.js"
import renderDialog from "../modules/dialog.js"
import { displayCards, deleteCard, editCard } from "../modules/cards.js"


function dom() {
    renderStatic();
    renderDialog();
    const dialog = document.querySelector("#add-task-dialog");
    const addTaskbutton = document.querySelector("#add-task");
    const submitTaskButton = document.querySelector("#submit-task");
    const closeDialogButton = document.querySelector(".close-dialog");
    const container = document.querySelector(".container")

    addTaskbutton.addEventListener("click", openTaskDialog)

    submitTaskButton.addEventListener("click", submitTask)

    closeDialogButton.addEventListener("click", () => {
        dialog.close()
    })

    // delete card button listener
    container.addEventListener("click", deleteCard)
    container.addEventListener("click", editCard)
    displayCards()
    
 

}

export default dom