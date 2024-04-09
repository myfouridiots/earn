import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateform() {
    if (firstName.length == 0) {
      alert("Please Enter First Name");
      return 
    }

    if (email.length == 0) {
      alert("Please Enter Email Id");
      return 
    }
    if (password.length < 8) {
      alert("password must be at least 8 characters");
      return 
    }
    let countUpperCase = 0
    let countLowerCase = 0
    let countDigit = 0
    let countSpecialChar = 0
    
    for(let i = 0; i < password.length; i++) {
      const SpecialChar =[ '*', '-', '(',')','!','@','#','$','%','^','&','=','+',';','/','{','}','<','>']
      if(SpecialChar.includes(password[i])) {
        countSpecialChar++
      }
      else if(!isNaN(password[i]*1)){
        countDigit++

      }
      else{
        if(password[i]==password[i].toUpperCase()){
          countUpperCase++
        }
        if(password[i]==password[i].toLowerCase()){
          countLowerCase++
        }
      }
    }
    if(countLowerCase == 0){
      alert("Password must contain at least one lowercase letter")
      return
    }
    if(countUpperCase == 0){
      alert("Password must contain at least one uppercase letter")
      return
    }
    if(countSpecialChar == 0){
      alert("Password must contain at least one special character")
      return
    }
    if(countDigit == 0){
      alert("Password must contain at least one digit")
      return
    }
  }

    return (
      <div className="main">
        <form>
        <h2>REACT APPLICATION USING STATE AND CONDITION</h2>
          <input placeholder='First Name' onChange={(e) => setfirstName(e.target.value)}></input>
          <input placeholder='Last Name' onChange={(e) => setlastName(e.target.value)}></input>
          <input placeholder='Mobile No.' onChange={(e) => setMobile(e.target.value)}></input>
          <input placeholder='Age' onChange={(e) => setAge(e.target.value)}></input>
          <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
          <input placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input><br />
          <button type='submit' onClick={()=>{validateform()}} >Submit</button>
        </form>
      </div>
    )
  }

  export default App;
