import React, { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <section className="contact-form pb-4" id="contact">
          <div className="row">
            <div className="col-md-6">
              <h2 className="title">Contact Us</h2>
              <form>
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-email-submit">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="ml-5">
                <h2 className="title">Information</h2>
                <p>Phone Number: +647-123-456</p>
                <p>Location: 123, Bay Street, Toronto, Ontario</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Contact;
