import React, { useEffect } from "react";

import NetworkContainer from "../NetworkContainer";

import "./Hero.css";

function Hero() {
  // useEffect(() => {
  //   const chevron = document.querySelector(".fa-angle-double-down");
  //   setInterval(function () {
  //     chevron.classList.add("chev-jump");
  //   }, 3000);
  // }, []);

  return (
    <div className="hero" id="hero">
      <div className="hero-overlay">
        <div className="hero-block">
          <div className="hero-block-a">
            <h1>- HI. I'M ETHAN -</h1>
          </div>
          <div className="hero-block-b">
            <h1>FULL STACK</h1>
            <h1>DEVELOPER</h1>
          </div>
        </div>
        <NetworkContainer />
        <i class="fas fa-angle-double-down"></i>
      </div>
    </div>
  );
}

export default Hero;
