
import reactLogo from './assets/react.svg'
import { Button } from '@/components/ui/button'
import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8787/api/posts')
      .then(response => {
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data); 
      
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); 


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div>
      <h1>Posts</h1>
      <pre><code>{JSON.stringify(posts, null, 2)}</code></pre>
 
    </div>
        <Button variant="outline">Outline</Button>
      </div>
     
    </>
  )
}

export default App
