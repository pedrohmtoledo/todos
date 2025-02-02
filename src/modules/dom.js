import "../styles/static.css"
import "../styles/cards.css"
import "../styles/project.css"
import "../styles/dialog.css"
import renderStatic from "../modules/static.js"
import { openTaskDialog, submitTask, displayCards, deleteCard, editCard}  from "../modules/task.js"
import { renderTaskDialog, renderProjectDialog } from "../modules/dialog.js"
import {  dateFilter } from "./filter.js"
import { highlightSelectedFilter } from "./helper.js"
import { displayProject, openProjectDialog, submitProject, deleteProject, editProject } from "./project.js"


function dom() {
    renderStatic();
    renderTaskDialog();
    renderProjectDialog();
    displayProject();

    const taskDialog = document.querySelector("#add-task-dialog");
    const projectDialog = document.querySelector("#add-project-dialog");
    const addTaskButton = document.querySelector("#add-task");
    const addProjectButton = document.querySelector("#add-project");
    const submitTaskButton = document.querySelector("#submit-task");
    const submitProjectButton = document.querySelector("#submit-project")
    const closeDialogButton = document.querySelectorAll(".close-dialog");
    const taskContainer = document.querySelector("#tasks");
    const todayButton = document.querySelector("#today");
    const weekButton = document.querySelector("#week");
    const monthButton = document.querySelector("#month");
    const allButton = document.querySelector("#all");
    const projectContainer = document.querySelector("#project-list")


    addTaskButton.addEventListener("click", openTaskDialog)

    submitTaskButton.addEventListener("click", submitTask)

    submitProjectButton.addEventListener("click", submitProject)

    closeDialogButton.forEach((button) => button.addEventListener("click", () => {
        taskDialog.close()
        projectDialog.close()
    }))

    addProjectButton.addEventListener("click", openProjectDialog)

    // delete card button listener
    taskContainer.addEventListener("click", deleteCard);
    // edit card button listener
    taskContainer.addEventListener("click", editCard);
    // delete project button listener
    projectContainer.addEventListener("click", deleteProject);
    // edit project button listener
    projectContainer.addEventListener("click", editProject);

    //button to filter tasks due to today
    todayButton.addEventListener("click", () => {
        dateFilter.setToday()
        highlightSelectedFilter(dateFilter.getFilter());
        displayCards();  
    })

    // button to filter tasks due to current week
    weekButton.addEventListener("click", () => {
        dateFilter.setWeek();
        highlightSelectedFilter(dateFilter.getFilter());
        displayCards(); 
    })

    // button to filter tasks due to current month
    monthButton.addEventListener("click", () => {
        dateFilter.setMonth();
        highlightSelectedFilter(dateFilter.getFilter());
        displayCards();  
    })

    // button show all tasks
    allButton.addEventListener("click", () => {
        dateFilter.setAll();
        highlightSelectedFilter(dateFilter.getFilter());
        displayCards();
        
    })
    displayCards()
    
 

}

export default dom