/*
 * This component is intended to serve as a very simple
 * example of a component which uses its props. In this
 * case, it simply passes them down to its Link child. It
 * may be preferable to combine this with the NavBar component.
 */

import React from 'react';
import {Link} from 'react-router-dom'
import './NavLink.css'

const NavLink = (props) => (
    <li className="NavItem">
        <Link {...props} style={{color: 'inherit'}} />
    </li>
);

export default NavLink;