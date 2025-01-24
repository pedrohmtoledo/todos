function renderStatic() {
    const body = document.querySelector("body");
    const staticContent = `    <header>
        <h1> TODOS </h1>
    </header>
    <div class="container">
        <div id="left-bar">
            <div class="dates">
                <button id="today">Today</button>
                <button id="today">Week</button>
                <button id="today">Month</button>
                <button id="today">All</button>

            </div>
            <button id="add-project" class="static-button"><span class="tooltip">Add a project</span></button>
            
        </div>
        <div id="tasks"> 
            <button id="add-task" class="static-button"><span class="tooltip">Add a task</span></button>
            <div class="todos">
                <div class="card">  bla bla</div>
           
            </div>
        </div>
    </div>
    `;
    body.innerHTML = " ";
    body.innerHTML = staticContent;

}

export default renderStatic