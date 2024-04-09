
import React, { useState, useEffect } from'react'; 
import './App.css'; 
function App() { 

  const url = 'https://jsonplaceholder.typicode.com/users/' 

  const [data, setData] = useState([]); 

  useEffect(() => { 

    fetch(url).then((res) => res.json()).then((d)=> setData(d)); 

  }, []); 

  return ( 
    <div className="App"> 
      <h1 style={{color:"green"}}>USING JAVASCRIPT INBUILD FUNCTION</h1> 
      <center> 
        {data.map((dataobject,index)=>{ 
          return ( 
          <div style={{ 
            border: '1px solid black', 
            padding: '10px', 
            margin: '10px', 
            width: '200px', 
            height: '200px', 
            borderRadius: '10px', 
            background:"lightgreen" 
          }} 
          > 
            <h2>{dataobject.name}</h2> 
            <p>{dataobject.email}</p> 
          </div> 
          ) 
        })} 
      </center> 
    </div> 
  ) 
} 
export default App; 