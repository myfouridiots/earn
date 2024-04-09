import logo from './logo.svg';
import React, { useState } from 'react';
import * as yup from 'yup';
import './App.css';

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const useSchema = yup.object().shape({
    firstName:yup.string().required(),
    lastName:yup.string(),
    mobile:yup.string(),
    age:yup.string(),
    email:yup.string().email().required(),
    password:yup.string().min(8).required()
  });

  async function validateform() {
    let dataObject = {
      firstName:firstName,
      lastName:lastName,
      mobile:mobile,
      age:age,
      email:email,
      password:password
    }
    const isValid =await useSchema.isValid(dataObject)
    if(isValid){
      alert("Form is valid")
    }else{
      alert("Form is not valid")
    } 
  }
    return (
      <div className="main">
        <form>
          <h2>REACT APPLICATION</h2>
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
