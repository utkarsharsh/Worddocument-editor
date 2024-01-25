import React, { useEffect, useState } from 'react'
import './homepage.css'
import Navbar from './navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const Homepage = ({socket,t}) => {
  console.log(t);
  const [documents,setdocuments]=useState([]);
	const navigate = useNavigate();
  async function handleapicall(){
    let url=import.meta.env.VITE_URL;
    const {data}=await axios.get(url+"getdocument");
    setdocuments(data);
    console.log(data);
  }

useEffect(()=>{
  handleapicall();
},[])


useEffect(()=>{
  let x=localStorage.getItem("token1212");
  if(x){
   
  }
  else{
    navigate("/");
  }
 
 },[])









  return (
    <div>
      <Navbar t={t}/>
    <div className="homewraper">
      <div className="cardwraper">
        <div >
          {
            documents.map((e,index)=>{
return(
<div key={index}>
  <div className="homecard">
    <img src='https://static.vecteezy.com/system/resources/previews/000/420/451/original/vector-documents-icon.jpg'/>
    <p className='cardfilename'>
    Filenames  : {e.filename}
    </p>
    <p className='carddiscription'>
     Discription: {e.discription}
    </p>
    <Link to={"/doc/"+ e.filename}>
    <button > 
      view
    </button>
    </Link>
   

  </div>

</div>



)


            })
}

            
     

        </div>

      </div>
      
    </div>


    </div>
  )
}

export default Homepage