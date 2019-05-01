import React from "react";

import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
