import logo from './logo.svg'; 
import './App.css'; 
import useSWR from 'swr'; 
function App() { 
  const fetcher = (...args)=>fetch(...args).then((res) => res.json()); 
  const Swr =() =>{ 
    const{ 
      data: countries, 
      error, 
      isValidating, 
    }=useSWR('https://restcountries.com/v2/all',fetcher); 

    if(error){ 
      return <div className='failed'>Failed to Load..</div> 
    } 
    if(isValidating){ 
      return <div className='loading'>Loading......</div> 
    } 
  return ( 
    <div className="App"> 

      {countries && countries.map((country,index) => { 
        return ( <div key={index}>{country.name} 
        <img key={index} 
        src={country.flags.png} 
        alt='flag' width={100} /> 
        </div>  
        ) 
      }) 

    } 
    </div> 
  ); 
 } 
  return <div><Swr /></div> 
} 

export default App; 