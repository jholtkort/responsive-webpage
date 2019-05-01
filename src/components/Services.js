import React from "react";
import { Parallax } from "react-parallax";

import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <div className="parallax">
        <div className="row justify-content-around content">
          <div className="col-10 col-lg-5 my-5 text-center">
            <h2>Services we offer</h2>
            <h5>Below are some services we can provide you</h5>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="card col-10 col-lg-5 col-xl-2 my-5">
            <img
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="camping"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Camping</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita odit consequatur porro dolore, beatae dolor. Architecto
                cumque nisi qui aut. Eum quaerat hic nulla unde eos consectetur,
                doloribus suscipit veniam.
              </p>
              <a href="" className="btn btn-primary">
                Click for Camping
              </a>
            </div>
          </div>

          <div className="card col-10 col-lg-5 col-xl-2 my-5">
            <img
              src="https://images.unsplash.com/photo-1521727215876-9bfe173be82f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="hunting"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Hunting</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita odit consequatur porro dolore, beatae dolor. Architecto
                cumque nisi qui aut. Eum quaerat hic nulla unde eos consectetur,
                doloribus suscipit veniam.
              </p>
              <a href="" className="btn btn-primary">
                Click for Hunting
              </a>
            </div>
          </div>

          <div className="card col-10 col-lg-5 col-xl-2 my-5">
            <img
              src="https://images.unsplash.com/photo-1500917832468-298fa6292e2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="sailing"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Sailing</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita odit consequatur porro dolore, beatae dolor. Architecto
                cumque nisi qui aut. Eum quaerat hic nulla unde eos consectetur,
                doloribus suscipit veniam.
              </p>
              <a href="" className="btn btn-primary">
                Click for Sailing
              </a>
            </div>
          </div>

          <div className="card col-10 col-lg-5 col-xl-2 my-5">
            <img
              src="https://images.unsplash.com/photo-1493787039806-2edcbe808750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="fishing"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Fishing</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita odit consequatur porro dolore, beatae dolor. Architecto
                cumque nisi qui aut. Eum quaerat hic nulla unde eos consectetur,
                doloribus suscipit veniam.
              </p>
              <a href="" className="btn btn-primary">
                Click for Fishing
              </a>
            </div>
          </div>

          <div className="card col-10 my-5">
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1333&q=80"
              alt="traveling"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Traveling</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita odit consequatur porro dolore, beatae dolor. Architecto
                cumque nisi qui aut. Eum quaerat hic nulla unde eos consectetur,
                doloribus suscipit veniam.
              </p>
              <a href="" className="btn btn-primary">
                Click for Traveling
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
