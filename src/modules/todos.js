// class constructor for the tasks
class Task {
       
    constructor(title, description, dueDate, priority, project = "none"){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        
    }

}


class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}
export { Task, Project }