import "./styles/static.css"
import "./styles/cards.css"
import taskIMg from "./img/task.svg"
import Todos from "./modules/todos.js"
import Projects from "./modules/project.js"
import renderStatic from "./modules/static.js"
import "./styles/dialog.css"
import { openTaskDialog, submitTask } from "./modules/task.js"
import renderDialog from "./dialog.js"




// renderStatic();
// renderDialog();
const dialog = document.querySelector("#add-task-dialog");
const addTaskbutton = document.querySelector("#add-task");
const submitTaskButton = document.querySelector("#submit-task");
const deleteTaskButton = document.querySelectorAll(".delete-task");
const closeDialogButton = document.querySelector(".close-dialog");

addTaskbutton.addEventListener("click", openTaskDialog)

closeDialogButton.addEventListener("click", () => {
    dialog.close()
})
submitTaskButton.addEventListener("click", submitTask)