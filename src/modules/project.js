
// class constructor of the projects
class Projects {
    
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    insertTodo(todo){
        this.todos.push(todo)
    }

}


export default Projects