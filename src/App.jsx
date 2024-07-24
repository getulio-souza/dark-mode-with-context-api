import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import { useContext } from 'react'
import { ThemeContext } from './context/themeContext'


function App() {
  const [count, setCount] = useState(0)
  const {theme} = useContext(ThemeContext)

  return (
    <>
    {/* abaixo criamos uma classe dinamica para mudar o tema de claro para escuro  */}
      <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
        <Navbar/>
        <Outlet/>
      </div>
    </>
  )
}

export default App
