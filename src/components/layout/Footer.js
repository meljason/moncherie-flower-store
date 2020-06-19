import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="wrapper">
        <p>
          &copy; Mon Chérie, 2020 - All Right Reserved - Made with love by Jason
        </p>
        <ul>
          <li className="footer-item">
            <Link to="#!" className="sidebar-link">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li className="footer-item">
            <Link to="#!" className="sidebar-link">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li className="footer-item">
            <Link to="#!" className="sidebar-link">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
};

export default Footer;
