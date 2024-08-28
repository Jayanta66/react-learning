import { useState } from 'react'
import './App.css'

function Header(){
  return (

    <header>
      <h1>Header</h1>
    </header>

  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div>
        <h1>React Vdsfite Learning</h1>
      </div>

    </div>
  )
}

export default App
