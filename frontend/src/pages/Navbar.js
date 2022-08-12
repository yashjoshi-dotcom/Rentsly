import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
//Sample Navbar not to be used in production.
const Navbar = () => {
  return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to ="/" class="navbar-brand" href="/">Rentsly</Link>
    <div class="navbar-nav ">
      <Link to = "/about"class="nav-item nav-link ">About Us</Link>
      <Link to = "/contact" class="nav-item nav-link">Contact</Link>

      <Link to = "/signin"class="nav-item nav-link "  >Login</Link>
      <Link to = "/register" class="nav-item nav-link">Register</Link>

    </div></nav></>  
)
}

export default Navbar