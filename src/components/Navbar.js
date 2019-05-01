import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-3 active">
              <a className="nav-link" href="#home">
                Homepage<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
