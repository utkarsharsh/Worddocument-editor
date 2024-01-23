import React from 'react'
import Navbar from './navbar'
import './upload.css'
const Upload = () => {
  return (
    <div>
      <Navbar/>
      <div className="uploadwraper">
        <div className="uploadwraperin">
           <div className="filename">
            <p>Filename :</p>
            <input type='text'/>
           </div>
           <div className="discription">
            <p>Discription :</p>
            <input type='text'/>
           </div>
           <div className="chosefile">
            <p>WordFile :</p>
            <input type="file" /> 
           </div>
           <div className="filesubmit">
           <button>Upload</button>
           </div>


        </div>


      </div>




    </div>
  )
}

export default Upload