<<<<<<< HEAD:src/layouts/Header/index.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai"
import { SidebarData } from './data'
import './index.css' 
=======
import { Link } from 'react-router-dom';
import "./Header.css";
>>>>>>> ec082d4a9b9ee57989ec18da97d98880fae455cc:src/layouts/Header/index.jsx



function Navbar() {
    const [sidebar, setSidebar] = useState(false);
  
    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
      </>
    );
  }
  
  export default Navbar;
