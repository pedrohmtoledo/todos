
// lading page html rendering function
function renderStatic() {
    const body = document.querySelector("body");
    const staticContent = `    <header>
        <h1> TODOS LIST </h1>
    </header>
    <div class="container">
        <div id="left-bar">
            <div class="dates">
                
                <button id="today">Today</button>
                <button id="week">Week</button>
                <button id="month">Month</button>
                <button id="all">All</button>

            </div>
            
            <button id="add-project" class="static-button"><span class="tooltip">Add a project</span></button>
            
        </div>
        <div id="tasks"> 
            <button id="add-task" class="static-button"><span class="tooltip">Add a task</span></button>
            <div class="todos">
              
            </div>
        </div>
    </div>
    `;
    body.innerHTML = " ";
    body.innerHTML = staticContent;

}

export default renderStatic