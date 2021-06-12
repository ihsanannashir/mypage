import React, { Component } from 'react';
import '../css/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="#top" id="home"><div className="cont">Ihsan An-Nashir's Portfolio</div></a>

                <div className="content">
                    <a href="#project" id="pj"><div className="cont">Project</div></a>
                    <a href="#design" id="pj"><div className="cont">Design</div></a>
                </div>
            </div> 
        );
    }
}

export default Navbar;