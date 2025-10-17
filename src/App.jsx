import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Dictionary App</h1>
      </div>
      <input id="ser" type="text" placeholder="Enter a word to search meaning" /><button>Search</button>
      <br></br>
      <hr></hr>
     <details id="serchResults">
      <summary>Meanings</summary>
      <h6>Meaning of the word</h6>
     </details> 
     
    </>
  )
}

export default App
