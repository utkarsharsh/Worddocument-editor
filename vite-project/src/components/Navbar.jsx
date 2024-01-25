import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = ({t}) => {
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
    <Link to={"/home"}>  <button>Home</button> </Link> 
        </div>
        <div>
            <div className="navupload"> 
        <Link to={"/upload"}> <button>Upload</button></Link> 
        </div>
        <div className="profile">
        <button>{t}</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar