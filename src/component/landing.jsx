import React from 'react';
import '../css/bio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Landing extends React.Component {
    render() {
        return <div className="bio">
                <span id="judul">Hi, i'm Ihsan!</span><br/>
                <span id="desc">a frontend development enthusiast.</span>
                <div className="hub">
                    <a href="http://linkedin.com/in/ihsanannashir"><FontAwesomeIcon className='lkn' icon={faLinkedin} size="3x"/></a>
                    <a href="http://github.com/ihsanannashir"><FontAwesomeIcon className='gh' icon={faGithub} size="3x" /></a>
                    <a href="http://instagram.com/ihsanannashir"><FontAwesomeIcon className='ig' icon={faInstagram} size="3x"/></a>
                    <div className="cv">CV</div>
                </div>
            </div>
    }
}

export default Landing;