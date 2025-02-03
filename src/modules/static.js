
// lading page html rendering function
function renderStatic() {
    const body = document.querySelector("body");
    const staticContent = `    <header>
        <h1> TODOS LIST </h1>
    </header>
    <div class="container">
        <div id="left-bar">
            <div class="dates">
                
                <button id="today" class="date-button">Today</button>
                <button id="week" class="date-button">Week</button>
                <button id="month" class="date-button">Month</button>
                <button id="all" class="date-button">All</button>

            </div>
            <div id="project-container">
                <div id="projects">
                    <button id="allprojects" class="project-title"> #All Projects </button>
                    <button id="add-project" class="static-button"><span class="tooltip">Add a project</span></button>
                </div>
                <div id="project-list"></div>
            </div>
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