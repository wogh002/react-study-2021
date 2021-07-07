import React from 'react';
import Lecturer from './lecture';
const Lectures = ({ instructors, handleRemoveLecturer }) => (
    <ul className="lecturers">
        {
            instructors.map(item => <Lecturer
                key={item.id}
                instructor={item}
                handleRemoveLecturer={handleRemoveLecturer}
            />)
        }
    </ul>
);

export default Lectures;