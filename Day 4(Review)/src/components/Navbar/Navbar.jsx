import React from 'react'
import './Navbar.css'
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className='Navbar'>
    <BiMenu className='Navbar-list-icon'/>
    <div className='Navbar-search-box'> <input placeholder='Search ' ></input></div>

   </div>
  )
}

export default Navbar