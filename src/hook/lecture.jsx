import React, { useEffect, useContext } from "react";
import LectureContext from "./context/lectureContext";
const Lecturer = ({ instructor }) => {
  const context = useContext(LectureContext); //LectureContext.Consumer 과 같음.
  // useEffect(() => {
  //   if (pristine) {
  //     console.log("componentDidMount");
  //     pristine != pristine;
  //   }
  //   console.log("componentDidUpdate");
  // });
  console.log(context);
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
          context.removeLecturer(instructor.id);
        }}
      >
        모듈 강사 제거
      </button>
    </li>
  );
};
export default Lecturer;
