// class constructor for the tasks
class Task {
       
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        
    }

}


class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}
export { Task, Project }