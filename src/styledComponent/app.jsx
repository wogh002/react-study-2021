import React from "react";
import "./index.css";
import AppHeader from "./appHeader";
import Lecturer from "./lecturer";
import StyledMagicHat from "./styledMagicHat";
import { createGlobalStyle } from "styled-components";

// reset CSS 작성 할 때
const GlobalStyle = createGlobalStyle`
html{
  overflow-y:scroll;
}
body{
  margin:0;
  background : ${(props) => (props.darken ? "black" : "white")};
  color: ${(props) => (!props.darken ? "black" : "white")};
}
`;
const instructor = {
  FEML_lecturers: [
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
  ],
};
const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <Lecturer instructor={instructor.FEML_lecturers} />
      <StyledMagicHat className="magic-hat" />
    </>
  );
};
export default App;
