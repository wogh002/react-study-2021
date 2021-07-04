import React from 'react';
import Lecturer from './lecture';
const Lectures = ({lectures}) => (
    <ul className="lecturers">
        {
            lectures.map(item => <Lecturer
                key={item.id}
                instructor={item}
            />)
        }
    </ul>
);

export default Lectures;