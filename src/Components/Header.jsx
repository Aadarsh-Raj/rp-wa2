import React from 'react'
import Navbar from './Navbar';
import './Style/header.css'
function Header(prop) {
  const  clickIt= (link)=> prop.clickIt(link);
  return (
    <>
    <header className="header">
        <div className="header-left">
            About Me
            <hr className="main-section-hr" />
        </div>
        
            <Navbar clickLink={(link)=> clickIt(link)}/>
      </header>
    
    </>
  )
}

export default Header
