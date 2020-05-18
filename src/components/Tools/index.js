import React from "react";
import "./Tools.css";
import gitHub from "../../images/git_logo.png";

const animateBars = () => {};

function Tools(props) {
  return (
    <div className="tools-container">
      {/* <div className="tools-header"> */}
        {/* <i class="fas fa-wrench"></i> */}
        {/* <h1 className='tools-text'>My Favorite Tools</h1> */}
      {/* </div> */}
      <div className="bar-container">
        <div className="technology">
          <i class="fab fa-react"></i>
          <div className="bar">
            <div className="is-7"></div>
          </div>
        </div>
        <div className="technology">
          <i class="fab fa-js"></i>
          <div className="bar">
            <div className="is-8"></div>
          </div>
        </div>
        <div className="technology">
          <i class="fab fa-css3-alt"></i>
          <div className="bar">
            <div className="is-10"></div>
          </div>
        </div>
        <div className="technology">
          <i class="fab fa-node-js"></i>
          <div className="bar">
            <div className="is-6"></div>
          </div>
        </div>
      </div>
      {/* <div className="LinkedIn-button">
        <div className="tab linkedIn"></div>
      </div> */}
    </div>
  );
}

export default Tools;
