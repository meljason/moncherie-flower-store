import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <Fragment>
      <header>
        <Sidebar />
        <nav
          className="navbar navbar-expand-xl navbar-light justify-content-between wrapper"
          id="header"
        >
          <Link to="#!" className="logo navbar-brand">
            Mon Chérie
          </Link>
          <Link to="#!" className="logo navbar-brand-short">
            MC
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse menu-items"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link pr-3" to="#!">
                  Bouquets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to="#!">
                  Roses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to="#!">
                  Gift Boxes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to="#!">
                  Delivery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-3" to="#!">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="nav-link pr-3"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="nav-right row">
              <div className="shopping-cart col-md-6">
                <Link to="#!">
                  <i className="fas fa-shopping-bag"></i>
                </Link>
              </div>
              <div className="user-login col-md-6">
                <Link to="#!">
                  <i className="far fa-user-circle"></i>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navbar;
