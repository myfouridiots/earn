import React, { useState } from "react";  
const ToDoForm = ({addTask})=>{
    const [userInput, setUserInput] =useState('');  //creating a state variable for user input and setting it to an empty string by default.
    const handleChange =(e)=>{
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return(
        <form onSubmit={handleSubmit}>  
        <input value={userInput} type="text" onChange={handleChange} placeholder="Enter Task..."></input>
        <button>Submit</button>
        </form>
    );
};
export default ToDoForm;