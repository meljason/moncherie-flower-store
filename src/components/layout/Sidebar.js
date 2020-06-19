import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <ul className="sidebar-nav">
        <li className="sidebar-logo">
          <Link to="#!" className="sidebar-link">
            MC
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="#!" className="sidebar-link">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="#!" className="sidebar-link">
            <i className="fab fa-twitter"></i>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="#!" className="sidebar-link">
            <i className="fab fa-instagram"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
