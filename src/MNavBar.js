
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";


const MNavBar=()=> {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
    return (
      <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Home
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/where"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Where
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/hello"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Hello
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
      
    );
  }
  
export default MNavBar;