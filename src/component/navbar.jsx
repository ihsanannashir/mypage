import React from "react";
import '../css/navbar.css';
/*
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Project from "./project";
import Landing from './landing';
import Design from './design';

const Subhead = (props) => {
  return <div>
      <div className="cont" id="pj"><Link to={props.url} style={{ textDecoration: 'none', color: '#282828'  }}>{props.nama}</Link></div>
  </div>
}
*/

const Subhead = (props) => {
  return <div>
      <div className="cont" id="pj">{props.nama}</div>
  </div>
}

export default function Navbar() {
  return (
      <div>
        <div className="navbar">
            <div id="home">
              Ihsan An-Nashir's Portfolio
            </div>
            <div className="content">
              <Subhead url="/" nama="Home"/>
              <Subhead url="/project" nama="Project"/>
            </div>
        </div>
      </div>
  );
}

/*
export default function Navbar() {
  return (
    <Router>
      <div>
        <div className="navbar">
            <div id="home">
              Ihsan An-Nashir's Portfolio
            </div>
            <div className="content">
              <Subhead url="/" nama="Home"/>
              <Subhead url="/project" nama="Project"/>
            </div>
        </div>

        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/design">
            <Design />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </AnimatedSwitch>
      </div>
    </Router>
  );
}
*/