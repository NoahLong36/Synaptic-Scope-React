import React, { useState } from 'react';
import {
  FaRegFlag,
  FaTh,
  FaUserAlt,
  FaBars,
  FaEnvelope,
  FaLandmark,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const menuItems = {
  user: [
    {
      path: '/',
      name: 'Home',
      icon: <FaLandmark />,
    },
    {
      path: '/account',
      name: 'Account',
      icon: <FaUserAlt />,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/login',
      name: 'Login',
      icon: <FaRegFlag />,
    },
    {
      path: '/contact',
      name: 'Contact',
      icon: <FaEnvelope />,
    },
  ],
  researcher: [
    {
      path: '/',
      name: 'Home',
      icon: <FaLandmark />,
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      icon: <FaUserAlt />,
    },
    {
      path: 'patients/',
      name: 'Patients',
      icon: <FaTh />,
    },
    {
      path: '/testPlanner',
      name: 'Test Plans',
      icon: <FaRegFlag />,
    },
  ],
};

const Sidebar = ({ children, viewState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="slider-container">
      <div style={{ width: isOpen ? '300px' : '50px' }} className="slidebar">
        <div className="top-section">
        <div className="logo"style={{ display: isOpen ? 'block' : 'none'}}>
              <h2>Logo</h2>
          </div>
          <div
            style={{ marginLeft: isOpen ? '50px' : '0px' }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        {(viewState ? menuItems.researcher : menuItems.user).map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link-text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;