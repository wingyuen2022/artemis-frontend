import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from './data';
import { logout } from '../../features/user';
import { AiFillHome } from "react-icons/ai";
import "./index.css";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const title = useSelector(state => state.titleReducer);
    const dispatch = useDispatch();

    return (
      <>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaBars onClick={showSidebar} />
            </Link>
            <h1><a id="navbrand" href="/">Artemis Camping | </a></h1>

            <h3 className='menu-title'>{title}</h3>

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
                    <Link className="nav-item-link" to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}

              <li className='nav-text' onClick={() => dispatch(logout())}>
              <AiFillHome />
                signout
              </li>
            </ul>
          </nav>
      </>
    );
  }
  
  export default Navbar;
