import React from 'react';
const Lecture = (props) => (
    <li className="lecturer" key={props.lecturer.id}>
        <a href={props.lecturer.facebook}>
            <figure className="lecture-info">
                <img
                    src={props.lecturer.image}
                    alt={props.lecturer.name}
                    className="lecturer-photo">
                </img>
                <figcaption>{props.lecturer.module}을 담당 할 {props.lecturer.name} 강사 Facebook 바로가기</figcaption>
            </figure>
        </a>
    </li>
);

export default Lecture;