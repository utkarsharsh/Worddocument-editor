import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbarwraper'>
        <div className="navlogo">
<p>HELLO !</p>
        </div>
        <div className='navothers'>
        <div className="navsearch">
            <input type="search" placeholder="search your document"/>
        </div>
        <div className="navhome">
       <button>Home</button>
        </div>
        <div>
            <div className="navupload"> 
          <button>Upload</button>
        </div>
        <div className="profile">
        <button>H</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar