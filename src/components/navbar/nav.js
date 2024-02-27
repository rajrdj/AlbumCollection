import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="container">
   <Link to ='/' className='logo-link'><h1>Album List</h1></Link>
  </nav>
  )
}

export default Navbar;
