import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar(props) {
  
    return (
      <nav className="navbar navbar-dark bg-dark transparent-navbar">
        <span onClick={props.toggleSidebar} id="menu-btn">
          <FaBars />
        </span>

        <a className="navbar-brand" href="/">
          <span className="logo">Discuss Whatever</span>
        </a>
        <ul className="navbar-nav px-2 ml-auto">
         
          <li className="nav-item" id="create-post-nav-btn">
            <Link
              to="/posts/new"
              className="nav-item nav-link btn btn-outline-secondary my-2 my-sm-0"
            >
              <span className="custom-nav-item">Create Post</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;
