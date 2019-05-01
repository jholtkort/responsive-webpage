import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row justify-content-around">
          <div className="card col-10 col-lg-3 my-5">
            <img
              src="https://images.unsplash.com/photo-1501856054482-8b7fbff7b3fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="trees"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Trees</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita odit consequatur porro dolore, beatae dolor. Architecto
                cumque nisi qui aut. Eum quaerat hic nulla unde eos consectetur,
                doloribus suscipit veniam.
              </p>
              <a href="" className="btn btn-primary">
                Click for Trees
              </a>
            </div>
          </div>

          <div className="card col-10 col-lg-3 my-5">
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="mountains"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Mountains</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita odit consequatur porro dolore, beatae dolor. Architecto
                cumque nisi qui aut. Eum quaerat hic nulla unde eos consectetur,
                doloribus suscipit veniam.
              </p>
              <a href="" className="btn btn-primary">
                Click for Mountains
              </a>
            </div>
          </div>

          <div className="card col-10 col-lg-3 my-5">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="beaches"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Beaches</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita odit consequatur porro dolore, beatae dolor. Architecto
                cumque nisi qui aut. Eum quaerat hic nulla unde eos consectetur,
                doloribus suscipit veniam.
              </p>
              <a href="" className="btn btn-primary">
                Click for Beaches
              </a>
            </div>
          </div>
        </div>

        {/* Second Row */}

        <div className="row justify-content-around">
          <div className="card col-10 col-lg-5 my-5">
            <img
              src="https://images.unsplash.com/photo-1550266080-172b209c5d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="austin"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Austin, TX</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita odit consequatur porro dolore, beatae dolor. Architecto
                cumque nisi qui aut. Eum quaerat hic nulla unde eos consectetur,
                doloribus suscipit veniam.
              </p>
              <a href="" className="btn btn-primary">
                Click for Austin, TX
              </a>
            </div>
          </div>

          <div className="card col-10 col-lg-5 my-5">
            <img
              src="https://images.unsplash.com/photo-1499871435582-a1d4ff236842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt="cyclists"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Cyclists</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita odit consequatur porro dolore, beatae dolor. Architecto
                cumque nisi qui aut. Eum quaerat hic nulla unde eos consectetur,
                doloribus suscipit veniam.
              </p>
              <a href="" className="btn btn-primary">
                Click for Cyclists
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
