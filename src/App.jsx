import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavbarRouter from './router/router'
import "./styles/style.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavbarRouter/>
    </BrowserRouter>
  )
}

export default App
