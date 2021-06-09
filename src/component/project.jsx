import React from 'react';
import Template from './pj-temp';
import '../css/project.css';

//ini class component
class Project extends React.Component {
    render() {
        return <div id="project">
            <h1>Project</h1>
            <Template
                pict="http://placeimg.com/250/200/arch"
                judul="Project 1"
                keterangan="pokoknya ini isinya keterangan project hahay sdkfh weyuif uigfisug eruigy eruig iugt gfhgf trytr"
            />
            <Template
                pict="http://placeimg.com/250/200/nature"
                judul="Project 2"
                keterangan="pokoknya ini isinya keterangan project hahay sdkfh weyuif uigfisug eruigy eruig iugt"
            />
            <Template
                pict="http://placeimg.com/250/200/people/sepia"
                judul="Project 3"
                keterangan="pokoknya ini isinya keterangan project hahay sdkfh weyuif uigfisug eruigy eruig iugt"
            />
            </div>
    }
}

export default Project;