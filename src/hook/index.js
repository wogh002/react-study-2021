import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
// function ReactHookExample() {
// const [headLine, setHeadLine] = useState({
//   content: "React Hook",
//   lang: "en",
// });
// const [image, setImage] = useState({
//   src: "http://pngimg.com/uploads/fish_hook/fish_hook_PNG62.png",
// });

// // const changeImagePath = (path) => {
// //   const img = image.current;
// //   img.setAttribute("src", path);
// // };
// //
// // useRef()를 사용해 실제 DOM 노드를 조작한 경우, 컴포넌트가 다시 그려지지 않는 점에 주의하세요. (state, props가 변경되어야 업데이트)
// useEffect(() => {
//   console.log("update component22");
// });

// return (
//   <div className="app container">
//     <h1 lang={headLine.lang}>{headLine.content}</h1>
//     <p>React 훅(Hook)은 라이프 사이클 훅(Life Cycle Hook)과는 다르다</p>
//     <img
//       src={image.src}
//       width="180"
//       height="180"
//       alt="Hook"
//       style={{ marginTop: 20 }}
//     />
//     <button
//       onClick={() => {
//         setHeadLine({ content: "리액트 훅훅~", lang: null });
//       }}
//     >
//       한글변경
//     </button>
//     <button
//       onClick={() => {
//         setImage({
//           src: "http://pngimg.com/uploads/fish_hook/fish_hook_PNG11.png",
//         });
//       }}
//     >
//       이미지 변경
//     </button>
//   </div>
// );
// }

ReactDOM.render(<App />, document.getElementById("root"));
