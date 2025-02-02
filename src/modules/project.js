import { createProjectList, getProjectDialogElements, resetDialogValues, getProjectDialogValues, inserProjectToLocalStorage, clearAllProjects, deleteProjectFromLocalStorage, setProjectDialogValues, editProjectOnLocalStorage } from "./helper";

function displayProject() {
    clearAllProjects();
    

    const projects = JSON.parse(localStorage.getItem("projects"));
 

    for(const key in projects){
        const project = createProjectList(projects[key], key);

        const projectList = document.querySelector("#project-list");

        projectList.appendChild(project)
    }

}

function openProjectDialog() {
    const dialogElements = getProjectDialogElements();
    resetDialogValues(dialogElements);
    dialogElements.projectDialog.show()

}

function submitProject(e) {
    const dialogValues = getProjectDialogValues();
    
    const dialogElements = getProjectDialogElements();

    if (!dialogElements.projectForm.checkValidity()){
        e.preventDefault();
    
    } else if(!dialogValues.projectId){
        e.preventDefault();
        inserProjectToLocalStorage(dialogValues);
        dialogElements.projectDialog.close();

    } else {
        e.preventDefault();
        editProjectOnLocalStorage(dialogValues, dialogValues.projectId);
        dialogElements.projectDialog.close();

    }
    displayProject();

}

function deleteProject(e) {
    
    if (e.target.classList.contains("project-delete")) {
        const projectId = e.target.id;
        deleteProjectFromLocalStorage(projectId);
        displayProject();
    }
}

function editProject(e) {
    if (e.target.classList.contains("project-edit")) {
        const projectId = e.target.id;
        editProjectDialog(projectId);
    } 
}

function editProjectDialog(projectId) {
    const dialogElements = getProjectDialogElements(); 
    setProjectDialogValues(dialogElements, projectId);
    dialogElements.projectDialog.show();
}


export { openProjectDialog, submitProject, displayProject, deleteProject, editProject}