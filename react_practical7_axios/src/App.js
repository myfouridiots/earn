import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
;
function App() {
  
    const url = "https://jsonplaceholder.typicode.com/users"
    const [data, setData] = useState([])
    const fetchInfo = () => {
      return axios.get(url).then((res) => setData(res.data));
    }
    useEffect(() => {
      fetchInfo()
    }, [])


  return (
    <div className="App">

<h1 style={{color: "green"}}>using Javascript axios method to get API</h1>
      <center>
        {data.map((dataObj, index)=>{
          return (
            <div
            style={{
              width:"15em",
              background: "#35D841",
              padding: 2,
              borderRadius: 10,
              marginBlock: 10,
            }}
            >
              <p style={{fontSize:20, color:'white'}}>
                {dataObj.id},
                {dataObj.name},
                {dataObj.email},
                {dataObj.username}
              </p>
              <p style={{fontSize:20, color:'white'}}>
                {dataObj.name}
              </p>

            </div>
          )
        })}
      </center>

      
    </div>
  );
}

export default App;
