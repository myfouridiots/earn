import './App.css'
import React from 'react'
import ToDo from "./ToDo";


const ToDoList = ({toDoList,handleToggle,handleFilter}) => {
    return (
        <div>
                {toDoList.map(todo=>{
                    console.log(todo)
                    return (
                        <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    )
                })}
                <button style={{margin:'20px'}} onClick={handleFilter}>Clear Completed</button>
            
        </div>
    );
}

export default ToDoList;