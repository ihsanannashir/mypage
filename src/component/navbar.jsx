import React from "react";
import '../css/navbar.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Project from "./project";
import Landing from './landing';
import Design from './design';

export default function Navbar() {
  return (
    <Router>
      <div>
        <div className="navbar">
            <div className="cont" id="home">
              <Link to="/" style={{ textDecoration: 'none', color: '#282828' }}>Ihsan An-Nashir's Portfolio</Link>
                </div>
            <div className="content">
                <div className="cont" id="pj"><Link to="/project" style={{ textDecoration: 'none', color: '#282828'  }}>Project</Link></div>
                <div className="cont" id="pj"><Link to="/design" style={{ textDecoration: 'none', color: '#282828'  }}>Design</Link></div>
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