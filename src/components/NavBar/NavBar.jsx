import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className="navbar"> 
    <img className="netflix-logo" src="/images/Netflix-logo.webp" alt="Netflix-Logo" /> 
    <img className='avatar-logo' src="/images/Avatar-logo.webp" alt="Avatar-Logo" />
    </div>
  )
}

export default NavBar