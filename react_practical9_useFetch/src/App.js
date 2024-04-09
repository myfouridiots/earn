import './App.css';
import useFetch from "react-fetch-hook"; 
function App() {
  const { 
    data: posts, 
    isLoading,
    error 
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
  if (isLoading) { 
    return <div>Loading..</div>; 
  }
  if (error) { 
    return <div className='error'>Error: error fetching</div>; // Render an error message
  }

  return (
    <div className="App">
      <h1 className='title' style ={{color:"blue"}}>posts of users </h1> 
      {
      posts.map((post) => ( 
        <div key={post.id} className='card'>
          <h2 className='users'>{post.id} {post.title}</h2> 
          <p>{post.body}</p> 
        </div>
      ))
      }
    </div>
  );
}

export default App; 