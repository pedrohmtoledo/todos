import {Task, Project} from "./todos.js";

export function uniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// get all values from task dialog box that user has inserted to later add to local storage
export function getTaskDialogValues() {
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("datedue").value;
    const priority = document.getElementById("priority").value;
    const cardId = document.getElementById("cardid").value;
    const project = document.getElementById("project").value
   
    return { title, description, dueDate, priority, cardId, project};
}

// get all values from project dialog box that user has inserted to later add to local storage
export function getProjectDialogValues() {
    
    const title = document.getElementById("project-title").value;
    const description= document.getElementById("project-description").value;
    const projectId = document.getElementById("projectid").value

   
    return { title, description, projectId};
}

// get elements from task dialog to handle dom
export function getTaskDialogElements() {
    const taskDialog = document.querySelector("#add-task-dialog");
    const taskForm = document.getElementById("task-form") 
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const dueDate = document.getElementById("datedue");
    const priority = document.getElementById("priority");
    const cardId = document.getElementById("cardid");
    const project = document.getElementById("project")
    
    return { taskDialog, taskForm, title, description, dueDate, priority, cardId, project};

}
// get elements from project dialog to handle dom
export function getProjectDialogElements() {
    const projectDialog = document.querySelector("#add-project-dialog");
    const projectForm = document.getElementById("project-form");
    const title = document.getElementById("project-title");
    const description = document.getElementById("project-description");
    const projectId = document.getElementById("projectid")
    
    return { projectDialog, projectForm, description, title, projectId};

}

export function inserProjectToLocalStorage(values){
    const project = new Project(values.title, values.description)
    const newId = uniqueId();
     

    if("projects" in localStorage){
        const projects = JSON.parse(localStorage.getItem("projects"))
        projects[newId] = project;
        localStorage.setItem("projects", JSON.stringify(projects))
    } else {
        const newProject = {};
        newProject[newId] = project;
        localStorage.setItem("projects", JSON.stringify(newProject))
    }
}   

function projectList() {
    let projectList = "";
    const projects = JSON.parse(localStorage.getItem("projects"));
    
    for(const key in projects){
        
        projectList += `<option value="${key}">${projects[key].title}</option>`
    }
    return projectList;

}
export function updateProjectDropDown(){
        // update the project dropdown menu
        const projectSelect = document.getElementById("project");
   
        projectSelect.innerHTML = `<option value="" disabled selected>Select Project</option>` + projectList();
 
}

export function deleteProjectFromDropDownMenu(id){
    const project = document.getElementById(id);
    project.remove();
}


export function insertTaskToLocalStorage(values) {
    const task = new Task(values.title, values.description, values.dueDate, values.priority, values.project);//create new task
    localStorage.setItem(uniqueId(), JSON.stringify(task)); // add new task to local storage
}

// when user adds a task and open a dialog to fill, the values should be reseted, this functions does that
export function resetDialogValues(elements){
    for(const key in elements){
        elements[key].value = "";
    }
}

// this function puts the tasks values on the dialog fields when user clicks edit button

export function setTaskDialogValues(elements, cardId){
    const task = JSON.parse(localStorage.getItem(cardId));
    for(const key in elements){
        if(key != "cardId"){
            elements[key].value = task[key];
        }
    }
    elements["cardId"].value = cardId;
}

export function setProjectDialogValues(elements, projectId){
    const projects = JSON.parse(localStorage.getItem("projects"));
    const project = projects[projectId];
   
    for (const key in elements){
        console.log(key)
        elements[key].value = project[key];
    }
    elements["projectId"].value = projectId;

}

// set new values for the task that user has edited
export function editTaskOnLocalStorage(values, id){
    const task = new Task(values.title, values.description, values.dueDate, values.priority, values.project);//create new 
    localStorage.setItem(id, JSON.stringify(task)); // override the values of that task in local storage

}
export function editProjectOnLocalStorage(values, id){
    const projects = JSON.parse(localStorage.getItem("projects"));
    const project = new Project(values.title, values.description);
    delete projects[id];
    projects[id] = project;
    localStorage.setItem("projects", JSON.stringify(projects));
}
export function deleteTaskFromLocalStorage(id){
    localStorage.removeItem(id);
}

export function deleteProjectFromLocalStorage(id){
    const projects = JSON.parse(localStorage.getItem("projects"));
    delete projects[id]
    localStorage.setItem("projects", JSON.stringify(projects));
}

export function clearAllCards() {
    const todos = document.querySelector(".todos"); //get todos container to clear everything before displaying all card in order to not display card repeatedly
    
    while(todos.firstChild) {
        todos.removeChild(todos.firstChild);
    }
}

export function clearAllProjects() {
    const projects = document.querySelector("#project-list")
    while(projects.firstChild) {
        projects.removeChild(projects.firstChild);
    }
}
export function createACard(task, key) {
 
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", key);

    const cardHeader = document.createElement("div");
    cardHeader.setAttribute("class", "card-header");

    const cardTitle = document.createElement("div");
    cardTitle.setAttribute("class", "card-title");

    const cardPriority = document.createElement("div");
    cardPriority.setAttribute("class", `card-priority ${task.priority.toString().toLowerCase()}`);

    const cardDivider = document.createElement("div");
    cardDivider.setAttribute("class", "card-divider");

    const cardDescription = document.createElement("div");
    cardDescription.setAttribute("class", "card-description");

    const cardDueDate = document.createElement("div");
    cardDueDate.setAttribute("class", "card-duedate");

    const cardProject = document.createElement("div");
    cardProject.setAttribute("class", "card-project")

    const cardButtons = document.createElement("div");
    cardButtons.setAttribute("class", "card-buttons");

    const cardEditButton = document.createElement("button");
    cardEditButton.setAttribute("class", "card-edit");
    cardEditButton.setAttribute("id", key);

    const cardDeleteButton = document.createElement("button");
    cardDeleteButton.setAttribute("class", "card-delete");
    cardDeleteButton.setAttribute("id", key);

    
    cardTitle.textContent = task.title;
    
    cardPriority.textContent = task.priority;
    
    cardDescription.textContent = task.description;

    
    
    cardDueDate.textContent = `Due date: ${task.dueDate}`;
    
    cardEditButton.textContent = "Edit";
    cardDeleteButton.textContent = "Delete";

    cardHeader.append(cardTitle, cardPriority);
    cardButtons.append(cardEditButton, cardDeleteButton)

    card.append(cardHeader, cardDivider, cardDescription, cardDueDate, cardButtons)
    return card;
}

export function highlightSelectedDate(filter){
    const buttons = document.querySelectorAll(".date-button");
    buttons.forEach((button) => {
        if(button.id === filter ){
            button.classList.add("selected")

        } else {
            button.classList.remove("selected")
        }       
    })
}

export function highlightSelectedProject(filter){
    const buttons = document.querySelectorAll(".project")
    buttons.forEach((button) => {
        if(button.id === filter){
            button.classList.add("selected")

        } else {
            button.classList.remove("selected")
        }   
        
    })
    
}

export function createProjectList(proj, key){


    const project = document.createElement("div");
    project.setAttribute("class", "project")
    project.setAttribute("id", key)

    const projectTitle = document.createElement("button");
    projectTitle.setAttribute("class", "project-title");
    projectTitle.setAttribute("id", key);

    const projectButtons = document.createElement("div");
    projectButtons.setAttribute("class", "project-buttons-container");

    const projectEditButton = document.createElement("button");
    projectEditButton.setAttribute("class", "project-edit project-button");
    projectEditButton.setAttribute("id", key);

    const projectDeleteButton = document.createElement("button");
    projectDeleteButton.setAttribute("class", "project-delete project-button");
    projectDeleteButton.setAttribute("id", key);

    projectTitle.textContent = proj.title;
    projectDeleteButton.textContent = "Delete";
    projectEditButton.textContent = "Edit";

    projectButtons.append(projectEditButton, projectDeleteButton);
    project.append(projectTitle, projectButtons, projectEditButton, projectDeleteButton);

    return project

}