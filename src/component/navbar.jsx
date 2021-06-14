import React from "react";
import '../css/navbar.css';
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

export default function Navbar() {
  return (
    <Router>
      <div>
        <div className="navbar">
            <div className="cont" id="home">
              <Link to="/" style={{ textDecoration: 'none', color: '#282828' }}>Ihsan An-Nashir's Portfolio</Link>
            </div>
            <div className="content">
                <Subhead url="/project" nama="Project"/>
                <Subhead url="/design" nama="Design"/>
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