

// function to create a card and render it to DOM
function createCard(task){
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", task.id);

    const cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card-header");

    const cardTitle = document.createElement("div");
    cardTitle.setAttribute("class", "card-title");

    const cardPriority = document.createElement("div");
    cardPriority.setAttribute("class", `card-priority ${task.priority.toLowerCase()}`);

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

    const cardDeleteButton = document.createElement("button");
    cardDeleteButton.setAttribute("class", "card-delete");

    
    cardTitle.textContent = task.title;
    
    cardPriority.textContent = task.priority;
    
    cardDescription.textContent= task.description;
    
    cardDueDate.textContent = `Due date: ${task.dueDate}`;
    
    cardEditButton.textContent = "Edit";
    cardDeleteButton.textContent = "Delete";

    cardHeader.append(cardTitle, cardPriority);
    cardButtons.append(cardEditButton, cardDeleteButton)

    card.append(cardHeader, cardDivider, cardDescription, cardDueDate, cardButtons)

    const cardContent = `
                    
                    <div class="card-header">
                        <div class="card-title">Complete Project</div>
                        <div class="card-priority low">Low</div>
                    </div>
                    <div class="card-divider"></div>
                    <div class="card-description"></div>
                    <div class="duedate">Due Date: <span id="duedate"></span></div>
                    <div class="card-actions">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>`;

    const todos = document.querySelector(".todos")
    
    todos.appendChild(card)
   
}

//function to delete card

function deleteCard() {

}

export default createCard