import { deleteTaskFromLocalStorage, clearAllCards } from "./helper.js";

// function to display all card on screen designated area
function displayCards(){

    clearAllCards() // clear all card before rendering them

    for(let i = 0; i < localStorage.length; i++ ){
        let key = localStorage.key(i)
        let tasks = JSON.parse(localStorage.getItem(key));
  
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("id", key);

        const cardHeader = document.createElement("div");
        cardHeader.setAttribute("class", "card-header");

        const cardTitle = document.createElement("div");
        cardTitle.setAttribute("class", "card-title");

        const cardPriority = document.createElement("div");
        cardPriority.setAttribute("class", `card-priority ${tasks.priority.toString().toLowerCase()}`);

        const cardDivider = document.createElement("div");
        cardDivider.setAttribute("class", "card-divider");

        const cardDescription = document.createElement("div");
        cardDescription.setAttribute("class", "card-description");

        const cardDueDate = document.createElement("div");
        cardDueDate.setAttribute("class", "card-duedate");

        const cardButtons = document.createElement("div");
        cardButtons.setAttribute("class", "card-buttons");

        const cardEditButton = document.createElement("button");
        cardEditButton.setAttribute("class", "card-edit");
        cardEditButton.setAttribute("id", key);

        const cardDeleteButton = document.createElement("button");
        cardDeleteButton.setAttribute("class", "card-delete");
        cardDeleteButton.setAttribute("id", key);

        
        cardTitle.textContent = tasks.title;
        
        cardPriority.textContent = tasks.priority;
        
        cardDescription.textContent= tasks.description;
        
        cardDueDate.textContent = `Due date: ${tasks.dueDate}`;
        
        cardEditButton.textContent = "Edit";
        cardDeleteButton.textContent = "Delete";

        cardHeader.append(cardTitle, cardPriority);
        cardButtons.append(cardEditButton, cardDeleteButton)

        card.append(cardHeader, cardDivider, cardDescription, cardDueDate, cardButtons)

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