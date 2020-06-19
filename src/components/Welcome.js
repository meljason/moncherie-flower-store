import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Welcome = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <Fragment>
      <main className="wrapper">
        <section className="welcome-nav">
          <div className="row">
            <div className="col-md-6 welcome-container">
              <h1 className="title">Flowers for the ones you love</h1>
              <p className="subtitle">
                A vast assortment of fresh flowers to bring your loved ones joy
                and happiness. One-of-a-kind customizable bouquets for all
                occasions. Order one today and make your special someone feel
                special.
              </p>
              <Link
                data-aos="flip-down"
                activeClass="active"
                to="browse-flower"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="btn btn-find-bouquet"
              >
                Find a bouquet
              </Link>
            </div>

            <div className="col-md-6 img-container">
              <div className="flower-img"></div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Welcome;
