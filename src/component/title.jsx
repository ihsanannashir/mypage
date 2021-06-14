import React from 'react';

const Title = (props) => {
    return <div className="head" style={{marginTop: '20px'}}>
        <h1>{props.judul}</h1>
        <p style={{fontSize: '18px'}}>{props.ket}</p>
    </div>
}

Title.defaultProps = {
    judul: 'ini judul',
    ket: 'Ini keterangan'
  };

export default Title;