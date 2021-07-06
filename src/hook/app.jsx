import React, { useState } from "react";
import "./index.css";
import LectureContext from "./context/lectureContext";
import AppHeader from "./layout/appHeader";
import AppMain from "./layout/appMain";
const FEML_lecturers = [
  {
    id: "lecturer-az01871",
    name: "김데레사",
    facebook: "https://ko.reactjs.org/docs/events.html",
    module: "A",
    image: "https://yamoo9.github.io/images/photo-yamoo@2x.png",
  },
  {
    id: "lecturer-az08888",
    name: "야무",
    module: "B,C",
    facebook: "https://ko.reactjs.org/docs/events.html",
    image: "https://yamoo9.github.io/images/photo-yamoo@2x.png",
  },
];

function App() {
  const [lecturers, setLecturers] = useState(FEML_lecturers);
  // const [isVisibleDialog,setIsVisibleDialog] = useState(false);
  // const [editingLecturer,setEditingLecturer] = useState(null);

  const removeLecturer = (removeId) => {
    setLecturers(lecturers.filter((item) => item.id !== removeId));
  };
  // const editLecturer= (editId,changedLecturer) => {
  //   setLecturers(lecturers.map(lecturer => (lecturer.id===editId ? changedLecturer:lecturer)));
  // }
  // const showDialog = (lecturerId)=>{
  //   setIsVisibleDialog(true);
  //   setEditingLecturer(lecturers.find(lecturer=>lecturer.id === lecturerId));
  // }
  // const hideDialog = ()=>{
  //   setIsVisibleDialog(false);
  //   setEditingLecturer(null);
  // }
  return (
    <LectureContext.Provider
      value={{
        lecturers,
        removeLecturer,
      }}
    >
      <AppHeader title="강사진" />
      <AppMain />
    </LectureContext.Provider>
  );
}
export default App;
