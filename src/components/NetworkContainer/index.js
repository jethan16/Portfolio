import React from "react";

import "./NetworkContainer.css";

function NetworkContainer() {
  return (
    <div className="network-container">
      <div className="network-box">
        <a href="https://www.facebook.com/ethan.jones.376" target="_blank">
          <div className="network facebook"></div>
        </a>
      </div>
      <div className="network-box">
        <a href="https://github.com/jethan16" target="_blank">
          <div className="network github"></div>
        </a>
      </div>
      <div className="network-box">
        <a href="https://www.linkedin.com/in/ethan-jones-54342288/" target="_blank">
          <div className="network linkedIn"></div>
        </a>
      </div>
    </div>
  );
}

export default NetworkContainer;
