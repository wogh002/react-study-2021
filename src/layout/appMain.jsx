import React from "react";
import Lectures from "../lectures";
import LectureContext from "../context/lectureContext";

const AppMain = () => (
  <main className="app-main">
    <h1 className="ally-hidden">앱 메인 콘텐츠</h1>
    <LectureContext.Consumer>
      {({ lecturers }) => <Lectures lecturers={lecturers} />}
    </LectureContext.Consumer>
  </main>
);

export default AppMain;
