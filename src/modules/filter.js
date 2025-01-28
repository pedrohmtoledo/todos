import { clearAllCards } from "./helper";
import { displayCards } from "./cards";
import { isToday, formatDistance, subDays, format, isSameWeek, isSameMonth} from "date-fns";



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
            console.log(storage) 
                
                
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
// export function filteredStorage (){
//     let filter = filterState();
//     let storage = {}
//     console.log("aqui")
//     console.log(filter.getFilter())
    
    
//     if(filter.getFilter() === "today"){
//         storage = todayFilterFilter()   
            
            
//     }else if(filter.getFilter() === "week"){
//         storage = weekFilterFunction();

//     }
//     return storage

// }

function todayFilterFunction() {
    let storage = {};
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const task = JSON.parse(localStorage.getItem(key))
        console.log(task.dueDate)
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
        const task = JSON.parse(localStorage.getItem(key))
        storage[key] = task;        
    }

    return storage

}

export const dateFilter = currentDateFilter();