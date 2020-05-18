import React from "react";
import Tools from "../Tools";

// import me from "../../images/facebook.png";
import ethanBio from "../../images/profile.jpeg";
import "./Bio.css";
// import "../NetworkContainer/NetworkContainer.css";

function Bio() {
  return (
    <div className="bio-section">
      <div className="bio">
        <div className="bio-content">
          <h1 className="header">ABOUT</h1>
          <p className="bio-quote">
            Located in Charlotte, North Carolina - I am a husband, father,
            musician and Full Stack Developer.
          </p>
          <p className="bio-body">
            I have always been motivated by creative endeavors. If I had to pick
            one word to describe myself it would be that - Creative. Building
            things has been an integral part of my life since I can remember,
            and evolving has always been close behind. From writing music, to
            audio engineering. From woodworking to furniture making. From a few
            lines of html to developing websites. I have a passion for creating.
            <br />
            <br />
            I work hard to employ that creativity in my thinking. I strive to
            help people produce their best work, so they can reach other people.
            Because that's what it's all about - People.
            <br />
            <br />
            Let's make something awesome.
          </p>
        </div>
        <div className="about-me">
          <img className="bio-image" src={ethanBio}></img>
          <div className="LinkedIn-button">
            <a
              href="https://www.linkedin.com/in/ethan-jones-54342288/"
              target="_blank"
              className="tab linkedIn"
            ></a>
          </div>
        </div>
        <div className="bio-header">
          <div className="skill-box">
            <div className="skill">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <p className="skill-text">Responsive</p>
            <p className="skill-sub">Mobile first</p>
          </div>
          <div className="skill-box">
            <div className="skill">
              <i class="fas fa-cogs"></i>
            </div>
            <p className="skill-text">Efficient</p>
            <p className="skill-sub">DRY clean code</p>
          </div>
          <div className="skill-box">
            <div className="skill">
              <i class="far fa-lightbulb"></i>
            </div>
            <p className="skill-text">Intuitive</p>
            <p className="skill-sub">User friendly</p>
          </div>
          <div className="skill-box">
            <div className="skill">
              <i class="fas fa-bolt"></i>
            </div>
            <p className="skill-text">Dynamic</p>
            <p className="skill-sub">Engaging apps</p>
          </div>
        </div>
      </div>
      {/* <Tools /> */}
    </div>
  );
}

export default Bio;
