import React, { Fragment } from 'react'
import './index.css';
import Lecture from './lecture';

const Lecturers = (props) => {
    return (
        <ul className="lecturers">
            {
                props.lecturers.map(lecturer => <Lecture key={lecturer.id} lecturer={lecturer} />)
            }
        </ul>
    )
}
const App = (props) => {
    return ( //return JSX
        <Fragment>
            <div className="app">
                <h1>Front -End Masters 강사진</h1>
                <Lecturers lecturers={props.lecturers} />
            </div>
        </Fragment>
    )
}
export default App;
