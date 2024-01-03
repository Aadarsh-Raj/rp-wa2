import React from 'react'
import './Style/navbar.css'
function Navbar(prop) {
    const navigateLink = (link)=> prop.clickLink(link);
  return (
   <nav className="navbar">
    <button className="nav-link-btn" onClick={()=>navigateLink('about')}>About</button>
    <button className="nav-link-btn" onClick={()=>navigateLink('certificate')}>Certificates</button>
    <button className="nav-link-btn" onClick={()=>navigateLink('project')}>Projects</button>
    <button className="nav-link-btn" onClick={()=>navigateLink('more')}>More</button>
    <button className="nav-link-btn" onClick={()=>navigateLink('contact')}>Contact</button>
   </nav>
  )
}

export default Navbar
