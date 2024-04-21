import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Register from './components/Register/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="backgroud">
        <Register></Register>
      </div>
    </>
  )
}

export default App
