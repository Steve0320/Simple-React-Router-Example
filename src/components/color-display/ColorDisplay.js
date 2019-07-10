/*
 * This set of components displays a color given by either
 * HSL or RGB parameters (defined by the URL). It also serves
 * as an example of how to make use of multiple named exports.
 */

import React from 'react';
import './ColorDisplay.css';

// Extract "match" key from props using destructuring
const RGB = ({match}) => {

    // Extract match key from params
    const {params} = match;

    // Build the CSS string from the params (using template literals)
    const color = `rgb(${params.r}, ${params.g}, ${params.b})`;

    return (
        <div className="Background" style={{background: color}}>
            rgb({params.r}, {params.g}, {params.b})
        </div>
    );

};

// Same as above, but for HSL values
// This could be combined with the RGB
// component above to follow DRY principles
const HSL = ({match}) => {

    const {params} = match;
    const color = `hsl(${params.h}, ${params.s}%, ${params.l}%)`;

    return (
        <div className="Background" style={{background: color}}>
            hsl({params.h}, {params.s}%, {params.l}%)
        </div>
    );

};

// Use named exports for both components
export {RGB, HSL};
