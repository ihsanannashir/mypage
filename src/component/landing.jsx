import React from 'react';
import '../css/bio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from './footer';

class Landing extends React.Component {
    render() {
        return <div>
                <div className="bio">
                    <span id="judul">Hi, i'm Ihsan!</span><br/>
                    <span id="desc">a frontend development enthusiast.</span>
                    <div className="hub">
                        <a href="https://linkedin.com/in/ihsanannashir/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className='lkn' icon={faLinkedin} size="3x"/></a>
                        <a href="https://github.com/ihsanannashir/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className='gh' icon={faGithub} size="3x" /></a>
                        <a href="https://instagram.com/ihsanannashir/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className='ig' icon={faInstagram} size="3x"/></a>
                    </div>
                </div>
                <Footer/>
            </div>
    }
}

export default Landing;