import { deleteTaskFromLocalStorage, clearAllCards, createACard } from "./helper.js";
import { editTaskDialog } from "./task.js";
import { currentDateFilter, filterFunctions, filteredStorage, dateFilter } from "./filter.js";

// function to display cards cards with any given filter
function displayCards(){
    
    clearAllCards() // clear all card before rendering them
    
    const dateFilteredStorage = dateFilter.filteredStorage(); // this function will filter all tasks by any filter selected and return it
     
    for (const key in dateFilteredStorage){ // loop to add tasks to the dom
        
        const card = createACard(dateFilteredStorage[key], key)
        const todos = document.querySelector(".todos")
        
        todos.appendChild(card)
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

export { displayCards, deleteCard, editCard} 