import React from 'react';

const handleClickA = e => {
    e.preventDefault();
    console.log(e.currentTarget, e.target, this);
}
const Lecturers = (props) => {
    return (
        <>
            <button type="button" className="button-remove-lecturer" onClick={(e) => { console.log('버튼클릭', e.currentTarget) }}>모듈 강사 제거</button>
            <ul className="lecturers">
                <li className="lecturer" key={props.instructor.id}>
                    <a href={props.instructor.facebook} onClick={handleClickA}>
                        <figure className="lecture-info">
                            <img
                                src={props.instructor.image}
                                alt={props.instructor.name}
                                className="lecturer-photo">
                            </img>
                            <figcaption>{props.instructor.module}을 담당 할 {props.instructor.name} 강사 Facebook 바로가기</figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
        </>
    )
}
export default Lecturers;