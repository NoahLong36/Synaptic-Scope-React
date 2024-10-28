import React, {useState} from "react";
import {
  FaRegFlag,
  FaTh,
  FaUserAlt,
  FaBars,
  FaEnvelope,
  FaLandmark,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Sidebar = ({children}) =>{
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const menuItem= [
    {
      path: "/",
      name: "Home",
      icon: <FaLandmark/>
    },
    {
      path: "/account",
      name: "Account",
      icon: <FaUserAlt/>
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh/>
    },
    {
      path: "/login",
      name: "Login",
      icon: <FaRegFlag/>
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <FaEnvelope/>
    }

  ]

  return (
    <div className="slider-container">
      <div style={{width: isOpen ? "300px" : "50px"}} className="slidebar">
        <div className="top-section">
          <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item, index) =>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )

}

export default Sidebar;