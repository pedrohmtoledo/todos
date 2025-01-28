import Task from "./todos.js"
import { displayCards, deleteCard } from "./cards.js"
import { insertTaskToLocalStorage, getDialogValues, getDialogElements, editTaskOnLocalStorage, resetDialogValues, setDialogValues } from "./helper.js";
import { dateFilter } from "./filter.js";

//Function to open dialog when add-task button is clicked.
function openTaskDialog() {
    
    const dialogElements = getDialogElements();
    resetDialogValues(dialogElements);
    dialogElements.dialog.show();

}
// after user fills his task information and click submit button, this fucntion will be called the task will be loaded to localStorage 
function submitTask(e) {
    const dialogValues = getDialogValues();
    
    const dialogElements = getDialogElements();
        
    if (!dialogElements.form.checkValidity()){
        e.preventDefault();
    
    } else if (!dialogValues.cardid){
        e.preventDefault();
        insertTaskToLocalStorage(dialogValues);
        displayCards(dateFilter); // display all cards again
        dialogElements.dialog.close();

    } else {
        e.preventDefault();
        editTaskOnLocalStorage(dialogValues, dialogValues.cardid);
        displayCards(dateFilter); // display all cards again
        dialogElements.dialog.close();
    }
    
}

function editTaskDialog(cardId) {
    const dialogElements = getDialogElements();  
    setDialogValues(dialogElements, cardId);
    dialogElements.dialog.show();
}


export { openTaskDialog, submitTask, editTaskDialog}