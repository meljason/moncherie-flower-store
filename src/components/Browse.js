import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


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
                  src={process.env.PUBLIC_URL + '/images/1.jpg'}
                  alt="Card image"
                />
              </div>
            </div>
            <div data-aos="fade-up" className="col-sm-4">
              <div className="card flower-card">
                <img
                  className="card-img"
                  src={process.env.PUBLIC_URL + '/images/2.jpg'}
                  alt="Card image"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div data-aos="fade-left" className="card flower-card">
                <img
                  className="card-img"
                  src={process.env.PUBLIC_URL + '/images/3.jpg'}
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
                  src={process.env.PUBLIC_URL + '/images/4.jpg'}
                  alt="Card image"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div data-aos="fade-up" className="card flower-card">
                <img
                  className="card-img"
                  src={process.env.PUBLIC_URL + '/images/5.jpg'}
                  alt="Card image"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div data-aos="fade-left" className="card flower-card">
                <img
                  className="card-img"
                  src={process.env.PUBLIC_URL + '/images/6.jpg'}
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
