/*
 * Main application component. This is the main component loaded by
 * the primary index.js file (inserted at the root of the DOM). Any
 * other components needed should be made children of this component.
 */

import React from 'react';

// NPM components
import {Route, Redirect, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

// Custom components
import {HSL, RGB} from '../color-display/ColorDisplay';
import NavBar from '../navbar/NavBar';

// Stylesheet for this component
import './App.css';

const App = (props) => (

    <div className="App">

        {/* Default route */}
        <Route exact path="/" render={() => <Redirect to="/hsl/10/90/50"/>} />

        {/* NavBar factored into a component. This could be made more reusable by
         passing in the links as props */}
        <NavBar/>

        {/* Handles the page-change effects(fade-in/fade-out). See the
         css-transition-group docs for more information. The Switch
         component from React Router ensures that only the first matching
         component will be rendered */}
        <div className="Content">
            <TransitionGroup>
                <CSSTransition key={props.location.key} timeout={300} classNames='fade'>
                    <Switch location={props.location}>
                        <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                        <Route exact path="/rgb/:r/:g/:b" component={RGB} />
                        <Route render={() => <div>Not Found</div>} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>

    </div>
);

export default App;
