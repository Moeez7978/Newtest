import React from 'react'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <div className="navcontainer flex justify-between items-center z-auto p-4">
      <div className="logo">
        Logo
      </div>
      <div className="menu flex flex-row gap-1 justify-center items-center">
        <FaBars className='cursor-pointer'/>
        Menu
      </div>
      <div className="icons">
        Icons
      </div>
      
    </div>
    </>
  )
}

export default Navbar
