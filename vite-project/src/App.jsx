import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Suneditor from './components/suneditor'
import Homepage from './components/Homepage'
import Navbar from './components/navbar'
import Upload from './components/Upload'
import { io } from "socket.io-client";
function App() {
  
  const socket= io("http://localhost:5000");
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
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<Homepage socket={socket}/>}></Route>
      <Route path='/upload' element={<Upload socket={socket}/>}></Route>
      <Route path='/doc/:id' element={<Suneditor socket={socket}/>}/>
      </Routes></BrowserRouter>
   
    </>
  )
}

export default App
