import React, { useState } from "react";

import NavBar from "./components/NavBar";
import Hero from "./components/hero";
import Bio from "./components/Bio";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonials";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  let [scrollState, setScrollState] = useState();

  // console.log(scrollState);

  // const generateAltStyle = () => {
  //   setAltStyleState(!altStyleState);
  // };

  // window.addEventListener("scroll", function () {
  //   setScrollState(this.scrollY);
  // });

  return (
    <div>
      {/* <NavBar scrollState={scrollState} /> */}
      <Hero />
      <Bio />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
