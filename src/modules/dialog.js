
// dialog html function render
function renderDialog() {
    const body = document.querySelector("body");
    const dialog = document.createElement("div")
    const dialogContent = `<dialog id="add-task-dialog" method="dialog">
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
                    <div class="dialog-buttons">
                        <button type="button" id="submit-task"> Submit</button>
                        <button type="button" class="close-dialog">Cancel</button>
                    </div>
                </form>
            </dialog>`;
    dialog.innerHTML = dialogContent
    body.appendChild(dialog)

}

export default renderDialog