import React from "react";

import "./NavBar.css";

function NavBar(props) {
    return(
        <div className={`nav-bar`}>
            <ul className={`nav-bar-list-${props.scrollState > 1015 ? 'light' : 'dark'}`}>
                <li>about</li>
                <li>work</li>
                <li>contact</li>
            </ul>
        </div>
    )
};

export default NavBar