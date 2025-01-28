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
import { todayFilter, currentDateFilter, dateFilter } from "./filter.js"


function dom() {
    renderStatic();
    renderDialog();
    const dialog = document.querySelector("#add-task-dialog");
    const addTaskbutton = document.querySelector("#add-task");
    const submitTaskButton = document.querySelector("#submit-task");
    const closeDialogButton = document.querySelector(".close-dialog");
    const container = document.querySelector(".container");
    const todayButton = document.querySelector("#today");
    const weekButton = document.querySelector("#week");
    const monthButton = document.querySelector("#month");
    const allButton = document.querySelector("#all");


    addTaskbutton.addEventListener("click", openTaskDialog)

    submitTaskButton.addEventListener("click", submitTask)

    closeDialogButton.addEventListener("click", () => {
        dialog.close()
    })

    // delete card button listener
    container.addEventListener("click", deleteCard);
    // edit card button listener
    container.addEventListener("click", editCard);

    //button to filter tasks due to today
    todayButton.addEventListener("click", () => {
        dateFilter.setToday()
        displayCards();
        
    })

    // button to filter tasks due to current week
    weekButton.addEventListener("click", () => {
        
        dateFilter.setWeek();
        displayCards();
        
    })

    // button to filter tasks due to current month
    monthButton.addEventListener("click", () => {
        
        dateFilter.setMonth();
        displayCards();
        
    })

    // button show all tasks
    allButton.addEventListener("click", () => {
        
        dateFilter.setAll();
        displayCards();
        
    })
    displayCards()
    
 

}

export default dom