import './App.css'
import React, { useState } from 'react'
import data from "./data.json";
import Header from "./Header";
import ToDoList from "./ToDoList";
// import ToDoForm from "./ToDoForm";
import ToDoForm from './ToDoForm';


function App() {
  const [toDoList,setToDoList]=useState(data);
  // console.log(toDoList)
  const handleToggle=(id)=>{
    let mapped = toDoList.map(task=>{
      return task.id === Number(id) ? {...task, complete:!task.complete} : {...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = ()=>{
    let filtered = toDoList.filter(task=>{
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const addTask = (userInput)=>{
    let copy = [...toDoList];
    copy = [...copy, {id:toDoList.length+1, task:userInput, complete:false}];
    setToDoList(copy);
  }
  return (
  
    <div>
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <ToDoForm addTask={addTask}/>
      
    </div>
  
  );
}

export default App;
