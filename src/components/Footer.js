import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <section id="contact">
      <div className="parallax">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 text-center mt-0 mt-sm-5">
              <h2>Contact Form</h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, ullam illo. Perspiciatis rem, voluptatem, fugiat
                eius, ipsam illo omnis dolore quos odio consequuntur est quidem
                aliquid non architecto nemo deleniti!
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-10">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control text"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control text"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control text"
                    id="exampleFormControlInput1"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control text"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="You message here..."
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
