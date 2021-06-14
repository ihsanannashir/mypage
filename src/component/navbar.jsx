import React from "react";
import '../css/navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/design">
            <Design />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}