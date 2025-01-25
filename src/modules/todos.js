// class constructor for the tasks
class Task {
    static #uid = 0;
    
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = ++Task.#uid;
    }



}

export default Task;