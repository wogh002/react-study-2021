import React, { useContext } from "react";
import Lectures from "../lectures";
import LectureContext from "../context/lectureContext";
const AppMain = () => {
  const context = useContext(LectureContext);
  return (
    <main className="app-main">
      <h1 className="ally-hidden">앱 메인 콘텐츠</h1>
      <Lectures lecturers={context.lecturers} />
    </main>
  );
};

export default AppMain;
