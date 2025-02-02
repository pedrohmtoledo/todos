
// task dialog html function render
export function renderTaskDialog() {
    const body = document.querySelector("body");
    const dialog = document.createElement("div")
    const dialogContent = `<dialog id="add-task-dialog" method="dialog">
                <div id="cardid"></div>
                <h3>TASK</h3>
                <form id="task-form">
                    
                    <label for="title"> Title </label>
                    <input type="text" id="title" name="title" placeholder="Enter task title" maxlength="30" required> 
                    <label for="descrption"> Description</label>
                    <textarea type="text" id="description" placeholder="Enter task description"  maxlength="200" required></textarea>
                    <label for="datedue"> Date due</label>
                    <input type="date"  placeholder="Selecet due date" id="datedue" required>
                    <label for="priority"> Priority </label>
                    <select id="priority" required>
                        <option value="" disabled selected>Select priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    </label> 
                    <label for="project"> Projects </label>
                    <select id="project">
                        <option value="" disabled selected>Select Project</option>
                    </select>
                    </label> 

                    <div class="dialog-buttons">
                        <button type="button" id="submit-task"> Submit</button>
                        <button type="button" class="close-dialog">Cancel</button>
                    </div>
                </form>
            </dialog>`;
    dialog.innerHTML = dialogContent
    body.appendChild(dialog)

}

export function renderProjectDialog() {
    const body = document.querySelector("body");
    const dialog = document.createElement("div")
    const dialogContent = `<dialog id="add-project-dialog" method="dialog">
                <div id="projectid"></div>
                <h3>PROJECT</h3>
                <form id="project-form">
                    
                    <label for="project-title"> Title </label>
                    <input type="text" id="project-title" name="title" placeholder="Enter project title" maxlength="15" required> 
                    <label for="project-descrption"> Description</label>
                    <textarea type="text" id="project-description" placeholder="Enter project description"  maxlength="200" required></textarea>
                                    
                    </label> 
                    <div class="dialog-buttons">
                        <button type="button" id="submit-project"> Submit</button>
                        <button type="button" class="close-dialog">Cancel</button>
                    </div>
                </form>
            </dialog>`;
    dialog.innerHTML = dialogContent
    body.appendChild(dialog)

}

