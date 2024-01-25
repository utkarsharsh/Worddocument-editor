import React, { useState,useEffect} from 'react'
import Navbar from './navbar'
import axios from 'axios'
import './upload.css'
import {useNavigate} from 'react-router-dom'
const Upload = ({t}) => {
     const [filename,setfilename]=useState(null);
     const [discription,setdiscription]=useState(null);
     const [doc,setdoc]=useState(null);
     const navigate = useNavigate();
   async  function handleupload(){
    if(filename==null || discription==null || doc==null){
        alert("Fill all information");
        return;
    }
     let form= new FormData();
     form.append('doc',doc);
     form.append('filename',filename);
     form.append('discription',discription);
     let url=import.meta.env.VITE_URL;
     console.log(url);
     const {data} = await axios.post( url+"upload", form, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
);
console.log(data);
     }

     useEffect(()=>{
      let x=localStorage.getItem("token1212");
      if(x){
       
      }
      else{
        navigate("/");
      }
     
     },[]);
  return (
    <div>
      <Navbar t={t}/>
      <div className="uploadwraper">
        <div className="uploadwraperin">
           <div className="filename">
            <p>Filename :</p>
            <input type='text' onChange={(e)=>{
                setfilename(e.target.value)
            }}/>
           </div>
           <div className="discription">
            <p>Discription :</p>
            <input type='text' onChange={(e)=>{
                setdiscription(e.target.value)
            }}/>
           </div>
           <div className="chosefile">
            <p>WordFile :</p>
            <input type="file" onChange={(e)=>{
                setdoc(e.target.files[0])
            }}/> 
           </div>
           <div className="filesubmit">
           <button onClick={handleupload}>Upload</button>
           </div>


        </div>


      </div>




    </div>
  )
}

export default Upload