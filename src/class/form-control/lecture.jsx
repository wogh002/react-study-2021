import React from "react";
import LectureContext from "./context/lectureContext";

const Lecturer = ({ instructor }) => {
  return (
    <LectureContext.Consumer>
      {({ removeLecturer }) => {
        return (
          <li className="lecturer" key={instructor.id}>
            <a href={instructor.facebook}>
              <figure className="lecture-info">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="lecturer-photo"
                ></img>
                <figcaption>
                  {instructor.module}을 담당 할 {instructor.name} 강사 Facebook
                  바로가기
                </figcaption>
              </figure>
            </a>
            <button
              type="button"
              className="button-remove-lecturer"
              onClick={() => {
                removeLecturer(instructor.id);
              }}
            >
              모듈 강사 제거
            </button>
          </li>
        );
      }}
    </LectureContext.Consumer>
  );
};
export default Lecturer;
