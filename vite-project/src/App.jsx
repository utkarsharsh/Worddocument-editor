import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Suneditor from './components/Suneditor'
import Homepage from './components/Homepage'
import Navbar from './components/navbar'
import Upload from './components/Upload'
import { io } from "socket.io-client";
function App() {
  let url=import.meta.env.VITE_URL;
  const socket= io(url);
  const [t,sett]=useState("")
  useEffect(
    ()=>{
      socket.on("connection", () => {
        console.log(socket.id);
        
      });
      

    },[socket]
  )

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login t={t} sett={sett}/>}></Route>
      <Route path='/home' element={<Homepage socket={socket} t={t} sett={sett}/>}></Route>
      <Route path='/upload' element={<Upload socket={socket} t={t}/>}></Route>
      <Route path='/doc/:id' element={<Suneditor socket={socket} t={t}/>}/>
      </Routes></BrowserRouter>
   
    </>
  )
}

export default App
