import React, { useEffect, useState } from 'react'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import Navbar from './navbar';
import axios from 'axios'
import './suneditor.css'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';
const Suneditor = ({socket,t}) => {
    const [value,setvalue]=useState("");
    const [currentfile,setcurrentfile]=useState(null);
        let {id}=useParams();
        useEffect(()=>{
          let x=localStorage.getItem("token1212");
          if(x){
           
          }
          else{
            navigate("/");
          }
         
         },[])
         const navigate = useNavigate();

  async  function handlevalue(){
     
     let url = import.meta.env.VITE_URL;
     console.log(id);
    let {data}= await axios.post(url + "search",{search:id});
    setvalue(data.doc);
    setcurrentfile(data.filename);
    console.log(data);
    socket.emit("Newroom",{room:id});
    }
  async  function handleupdate(){
    let url = import.meta.env.VITE_URL;
    let {data}=await axios.post(url+ "update",{filename:currentfile,doc:value});
     alert(data);

    }
    
    useEffect(()=>{
      handlevalue();
    },[])
    function handlesocketchange({doc}){
      console.log(doc);
   setvalue(doc);
    }
    useEffect(()=>{
      socket.on("applychange",handlesocketchange)
     return (()=>{
      socket.off("applychange",handlesocketchange)
     })
    },[socket])

    

  return (<>
  <Navbar t={t}/>
  {
    <br />
  }
  {
    <br />
  }
  <div className="suneditorwrap">
    <SunEditor setContents={value}    onChange={(e)=>{
socket.emit("changes",{doc:e,room:id});
console.log(e);
    }    } width='100%' height='300px'/>
<div className="sunbtn">
  <button onClick={handleupdate}>
    Update
  </button>
</div>
</div>
</>
  )
}

export default Suneditor