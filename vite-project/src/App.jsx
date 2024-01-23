import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Suneditor from './components/suneditor'
import Homepage from './components/Homepage'
import Navbar from './components/navbar'
import Upload from './components/Upload'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Homepage/>}></Route>
      <Route path='/upload' element={<Upload/>}></Route>
      
      </Routes></BrowserRouter>
   
    </>
  )
}

export default App
