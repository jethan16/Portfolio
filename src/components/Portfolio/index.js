import React from 'react';
import Tiles from './Tiles'

import './Body.css';
import '../Bio/Bio.css';

function Body() {
    return(
        <div className='body'>
            <h1 className='header'>PROJECTS</h1>
            <Tiles />
        </div>
    )
}

export default Body;