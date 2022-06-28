import {Link , NavLink} from "react-router-dom"
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li> <NavLink to="/" style={({isActive})=>{{return{background: isActive ? "red" : ""}}} }> Home</NavLink> </li>
            <li> <NavLink to="/about" style={({isActive})=>{{return{background: isActive ? "red" : ""}}} }> About</NavLink> </li>
            <li> <NavLink to="/contact" style={({isActive})=>{{return{background: isActive ? "red" : ""}}} }> Contact Us</NavLink></li>
            <li> <NavLink to="/post/mobile" style={({isActive})=>{{return{background: isActive ? "red" : ""}}} }> Post</NavLink></li>
            
        </ul>
    </div>
  )
}

export default Navbar