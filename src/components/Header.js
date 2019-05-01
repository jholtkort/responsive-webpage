import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <section id="home">
      <div className="parallax">
        <div className="row justify-content-around content">
          <div className="col-10 col-lg-5 my-5 text-center">
            <h1>OUTDOORS</h1>
            <h3>Sample Reactive Webpage</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
