import { isToday, isSameWeek, isSameMonth} from "date-fns";



const currentDateFilter = function (){
    let filter = "all";
    

    const setToday = ()=> {
        filter = "today";
        
    }
    const setWeek = () => {
        filter = "week";
        
    }
    const setMonth = () => {
        filter = "month"
    }
    const setAll = () => {
        filter = "all"
    }
    const getFilter = () => {
        return filter;
    }
 
    const filteredStorage = () => {
        
        let storage = {};  
 
        if(filter === "today"){
            storage = todayFilterFunction()          
                
        }else if(filter === "week"){
            storage = weekFilterFunction();

        }else if(filter === "month"){
            storage = monthFilterFunction();
        }else {
            storage = allFilterFunction();

        }
        return storage

    }

    return {setToday, filteredStorage, setMonth, setWeek, setAll, getFilter}

}

function todayFilterFunction() {
    let storage = {};
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        console.log(key)
        const task = JSON.parse(localStorage.getItem(key))
        if(isToday(task.dueDate)){
            storage[key] = task;
                       
        }  
    }

    return storage;
}

function weekFilterFunction() {
    const today = Date.now();
    let storage = {};
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const task = JSON.parse(localStorage.getItem(key))
        if(isSameWeek(today, task.dueDate)){
            storage[key] = task;     
        }
    }

    return storage
}

function monthFilterFunction() {
    const today = Date.now();
    let storage = {};
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const task = JSON.parse(localStorage.getItem(key))
        if(isSameMonth(today, task.dueDate)){
            storage[key] = task;     
        }
    }

    return storage

}

function allFilterFunction() {
    let storage = {};

    for(let i = 0; i < localStorage.length; i++){
        
        const key = localStorage.key(i);
        if(key !== "projects"){
            const task = JSON.parse(localStorage.getItem(key))
            storage[key] = task; 
          
        }
        
    }

    return storage

}

export const dateFilter = currentDateFilter();