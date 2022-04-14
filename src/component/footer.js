import React from 'react';

class Footer extends React.Component {
    render() {
      const footerStyle = {
        fontSize: '8px',
        position: 'bottom',
        // bottom: 0,
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: '10px',
        textDecoration: 'none',
        color: '#282828'
      };

      const srcStyle = {
        textDecoration: 'none',
        color: '#282828'
      }

      return (
        <div>
        <p style={footerStyle}>Created by Ihsan An-Nashir - <a href="https://github.com/ihsanannashir/mypage" target="_blank" rel="noreferrer noopener" style={srcStyle}>View Source Code</a></p>
        </div>
      );
    }
  }

export default Footer;