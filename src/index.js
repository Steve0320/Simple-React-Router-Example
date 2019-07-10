/*
 * Main file that bootstraps the rest of the app. It is responsible for
 * setting up context and housekeeping functionality for the rest of the
 * app (in this case, registering the Router and injecting its context).
 */

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, withRouter} from "react-router-dom";

// Custom components
import App from './components/app/App';

// Global styles
import './index.css';

// Inject router context into App by wrapping inside pseudo-component
// Eliminates the need for fake Routes within App to get routing context
const Site = withRouter((props) => <App {...props} />);

// Wrap pseudo-element in Router and insert into DOM root
ReactDOM.render(<Router><Site/></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
