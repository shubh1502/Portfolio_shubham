import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Projects from './components/projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Profile />
      <Projects />
    </div>
  )
}

export default App
