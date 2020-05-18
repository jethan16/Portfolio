import React from "react";

import "./Tiles.css";

import snsHero from "../../../images/screenshots/sns_hero.png";

// const projects = [
//   {
//     title: 'Sneakers With Stories',
//     summary: `Telling people's stories through custom sneakers`,
//     link: `https://safe-beyond-09344.herokuapp.com/`,
//     image: snsHero
//   }
// ]

function Tiles() {
  return (
    <div className="tile-section">
      <div className="tile-container">
        <div className="tile">
          <img src={snsHero} className='project-image' />
          <div className="summary">
            <h5>Sneakers With Stories</h5>
            <p>Telling people's stories through custom sneakers</p>
            <a
              href="https://safe-beyond-09344.herokuapp.com/"
              target="_blank"
              className="button"
            >
              <h5>CHECK IT OUT</h5>
              <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div className="tile two">
          <div className="summary">
            <h5>The Grindstone</h5>
            <p>Helping you sharpen your skills a language at a time</p>
            <a
              href="https://morning-dusk-12730.herokuapp.com/"
              target="_blank"
              className="button"
            >
              <h5>CHECK IT OUT</h5>
              <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div className="tile three">
          <div className="summary">
            <h5>Dashboard</h5>
            <p>Browsing the web with a dashboard of widgets</p>
            <a
              href="https://jethan16.github.io/HomePage/"
              target="_blank"
              className="button"
            >
              <h5>CHECK IT OUT</h5>
              <i class="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tiles;
