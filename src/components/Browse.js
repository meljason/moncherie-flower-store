import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import product1 from '../img/1.jpg'
import product2 from '../img/2.jpg'
import product3 from '../img/3.jpg'
import product4 from '../img/4.jpg'
import product5 from '../img/5.jpg'
import product6 from '../img/6.jpg'

const Browse = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Fragment>
      <div className="wrapper">
        <section className="browse-bouquet pb-5" id="browse-flower">
          <h2 className="browse-bouquet-title mb-4">Browse bouquets</h2>
          <div className="row mb-4">
            <div data-aos="fade-right" className="col-sm-4">
              <div className="card shadow rounded">
                <img
                  className="card-img"
                  src={product1}
                  alt="Card image"
                />
              </div>
            </div>
            <div data-aos="fade-up" className="col-sm-4">
              <div className="card flower-card">
                <img
                  className="card-img"
                  src={product2}
                  alt="Card image"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div data-aos="fade-left" className="card flower-card">
                <img
                  className="card-img"
                  src={product3}
                  alt="Card image"
                />
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-sm-4">
              <div data-aos="fade-right" className="card flower-card">
                <img
                  className="card-img"
                  src={product4}
                  alt="Card image"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div data-aos="fade-up" className="card flower-card">
                <img
                  className="card-img"
                  src={product5}
                  alt="Card image"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div data-aos="fade-left" className="card flower-card">
                <img
                  className="card-img"
                  src={product6}
                  alt="Card image"
                />
              </div>
            </div>
          </div>
          <a href="" className="btn btn-view-more">
            View More
          </a>
        </section>
      </div>
    </Fragment>
  );
};

export default Browse;
