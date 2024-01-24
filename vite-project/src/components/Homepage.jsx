import React, { useEffect, useState } from 'react'
import './homepage.css'
import Navbar from './navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Homepage = () => {
  const [documents,setdocuments]=useState([]);

  async function handleapicall(){
    let url=import.meta.env.VITE_URL;
    const {data}=await axios.get(url+"getdocument");
    setdocuments(data);
    console.log(data);
  }

useEffect(()=>{
  handleapicall();
},[])


  return (
    <div>
      <Navbar/>
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