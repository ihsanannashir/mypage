import React, { Component } from 'react';
import '../css/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="#top" id="home">Ihsan An-Nashir's Portfolio</a>

                <div className="content">
                <a href="#project" id="pj">Project</a>
                <a href="#design" id="pj">Design</a>
                </div>
            </div> 
        );
    }
}

export default Navbar;