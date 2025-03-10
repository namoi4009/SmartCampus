import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then((data) => {
        setTitle(data.title)
        console.log(data.title)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <div className="App">
      <h1>{title}</h1>
      {/* <h1>Hello</h1> */}
    </div>
  )
}

export default App
