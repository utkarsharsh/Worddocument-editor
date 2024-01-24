import React, { useState } from 'react'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import Navbar from './navbar';
import axios from 'axios'
import './suneditor.css'
import { useParams } from 'react-router-dom';
const Suneditor = () => {
    const [value,setvalue]=useState("");
    const [currentfile,setcurrentfile]=useState(null);
        let {id}=useParams();

  async  function handlevalue(){
     
     let url = import.meta.env.VITE_URL;
     console.log(id);
    let {data}= await axios.post(url + "search",{search:id});
    setvalue(data.doc);
    setcurrentfile(data.filename);
    console.log(data);

    }
  async  function handleupdate(){
    let url = import.meta.env.VITE_URL;
    let {data}=await axios.post(url+ "update",{filename:currentfile,doc:value});
     alert(data);

    }
    
    useState(()=>{
      handlevalue();
    },[])

  return (<>
  <Navbar/>
  {
    <br />
  }
  {
    <br />
  }
  <div className="suneditorwrap">
    <SunEditor setContents={value}    onChange={(e)=>{
setvalue(e);
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