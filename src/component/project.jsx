import React from 'react';
import Template from './pj-temp';
import '../css/project.css';
import Title from './title';

class Project extends React.Component {
    render() {
        return <div className="project">
                <Title judul="Project" ket="Project that i made."/>
                <div className="showcase">
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
                        pict="http://placeimg.com/250/200/people"
                        judul="Project 3"
                        keterangan="pokoknya ini isinya keterangan project hahay sdkfh weyuif uigfisug eruigy eruig iugt"
                    />
                    <Template
                        pict="http://placeimg.com/250/200/tech"
                        judul="Project 4"
                        keterangan="pokoknya ini isinya keterangan project hahay sdkfh weyuif uigfisug eruigy eruig iugt"
                    />
                    <Template
                        pict="http://placeimg.com/250/200/animals"
                        judul="Project 5"
                        keterangan="pokoknya ini isinya keterangan project hahay sdkfh weyuif uigfisug eruigy eruig iugt"
                    />
                </div>
            </div>
    }
}

export default Project;