import React from 'react';
import '../css/project.css';

const Template = (props) => {
    return <div className="kotak">
        <img src={props.pict} alt="" />
        <h2>{props.judul}</h2>
        <p>{props.keterangan}</p>
    </div>
}

export default Template;