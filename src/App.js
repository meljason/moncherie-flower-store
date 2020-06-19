import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import ScrollButton from "react-scroll-button";
import { Link, animateScroll as scroll } from "react-scroll";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Welcome from "./components/Welcome";
import Browse from "./components/Browse";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Welcome />
        <Browse />
        <Contact />
        <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <ScrollButton
            behavior={"smooth"}
            buttonBackgroundColor={"#E89EB9"}
            iconType={"arrow-up"}
            style={{ fontSize: "24px" }}
          />
        </Link>

        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
