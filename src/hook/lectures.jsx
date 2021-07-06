import React from "react";
import Lecturer from "./lecture";
const Lectures = ({ lecturers }) => (
  <ul className="lecturers">
    {lecturers.map((item) => (
      <Lecturer key={item.id} instructor={item} />
    ))}
  </ul>
);

export default Lectures;
