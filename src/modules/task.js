
import { insertTaskToLocalStorage, getTaskDialogValues, getTaskDialogElements, editTaskOnLocalStorage, resetDialogValues, setTaskDialogValues, deleteTaskFromLocalStorage, clearAllCards, createACard  } from "./helper.js";
import { dateFilter } from "./filter.js";
import { renderTaskDialog } from "../modules/dialog.js"

//Function to open dialog when add-task button is clicked.
function openTaskDialog() {
    renderTaskDialog();
    
    const dialogElements = getTaskDialogElements();
    resetDialogValues(dialogElements);
    dialogElements.taskDialog.show();

}
// after user fills his task information and click submit button, this fucntion will be called the task will be loaded to localStorage 
function submitTask(e) {
    const dialogValues = getTaskDialogValues();
    
    const dialogElements = getTaskDialogElements();
        
    if (!dialogElements.taskForm.checkValidity()){
        e.preventDefault();
    
    } else if (!dialogValues.cardId){
        e.preventDefault();
        insertTaskToLocalStorage(dialogValues);
        dialogElements.taskDialog.close();

    } else {
        e.preventDefault();
        editTaskOnLocalStorage(dialogValues, dialogValues.cardId);
        dialogElements.taskDialog.close();
    }
    displayCards(dateFilter); // display all cards again
    
}

function editTaskDialog(cardId) {
    renderTaskDialog();
    const dialogElements = getTaskDialogElements(); 
    setTaskDialogValues(dialogElements, cardId);
    dialogElements.taskDialog.show();
}



// function to display cards cards with any given filter
function displayCards(){
    
    clearAllCards() // clear all card before rendering them
    
    const dateFilteredStorage = dateFilter.filteredStorage(); // this function will filter all tasks by any filter selected and return it
     
    for (const key in dateFilteredStorage){ // loop to add tasks to the dom
        
        if(key !== "projects"){
            
            const card = createACard(dateFilteredStorage[key], key)
            const todos = document.querySelector(".todos")
            
            todos.appendChild(card)

        }

    }
  
    
}

//function to delete card, it gets the id of the delete button and delete the task that matches that id

function deleteCard(e) {
    
    if (e.target.classList.contains("card-delete")) {
        const cardId = e.target.id;
        deleteTaskFromLocalStorage(cardId);
        displayCards();
    }
}

// function of editcard button, this will match the id of the edit button with user click and pass it to dialog for user to edit the task
function editCard(e) {
    if (e.target.classList.contains("card-edit")) {
        const cardId = e.target.id;
        editTaskDialog(cardId);
    } 
}




export { openTaskDialog, submitTask, editTaskDialog, displayCards, deleteCard, editCard}