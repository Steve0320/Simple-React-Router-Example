/*
 * This component serves as a simple container to
 * organize a few NavLinks. It could be improved by
 * creating the child NavLinks based off of its props,
 * which would increase its reusability.
 */

import React from 'react';

// Custom components
import NavLink from "../navlink/NavLink";

// Stylesheet for this component
import './NavBar.css';

// Example of a stateless component defined using
// an arrow function
const NavBar = () => (

    <ul className="Nav">
        <NavLink to="/hsl/10/90/50">Red</NavLink>
        <NavLink to="/hsl/120/100/40">Green</NavLink>
        <NavLink to="/rgb/33/150/243">Blue</NavLink>
        <NavLink to="/rgb/240/98/146">Pink</NavLink>
    </ul>

);

export default NavBar;