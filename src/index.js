import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
const FEML_lecturers = [
    {
        id: 'lecturer-az01871',
        name: 'aaaa',
        facebook: 'https://www.aaaaaa.com',
        module: 'A',
        image: "https://yamoo9.github.io/images/photo-yamoo@2x.png"
    },
    {
        id: 'lecturer-az08888',
        name: 'bbbbbb',
        module: 'B,C',
        facebook: 'https://wwwwwwww.bbbbbb.com',
        image: "https://yamoo9.github.io/images/photo-yamoo@2x.png"
    }
]

function App() {
    return (
        <Fragment>
            <div className="app">
                <h1>Front -End Masters 강사진</h1>
                <ul className="lecturers">
                    {
                        FEML_lecturers.map(lecturer => (
                            <li className="lecturer" key={lecturer.id}>
                                <a href={lecturer.facebook}>
                                    <figure className="lecture-info">
                                        <img
                                            src={lecturer.image}
                                            alt={lecturer.name}
                                            className="lecturer-photo">
                                        </img>
                                        <figcaption>{lecturer.module}을 담당 할 {lecturer.name} 강사 Facebook 바로가기</figcaption>
                                    </figure>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </Fragment>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
