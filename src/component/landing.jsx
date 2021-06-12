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
                    <a href="http://linkedin.com/in/ihsanannashir" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className='lkn' icon={faLinkedin} size="3x"/></a>
                    <a href="http://github.com/ihsanannashir" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className='gh' icon={faGithub} size="3x" /></a>
                    <a href="http://instagram.com/ihsanannashir" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className='ig' icon={faInstagram} size="3x"/></a>
                    <a href="https://drive.google.com/file/d/13dkgh1cRrokw0OHaGl3RSaUIpMntjM8u/view" id="cv" target="_blank" rel="noreferrer noopener"><div className="cv">CV</div></a>
                </div>
            </div>
    }
}

export default Landing;