import React from "react";
import styled from "styled-components";
//컴포넌트와 스타일 컴포넌트를 별도 분리하지 않고 컴포넌트 내부에 스타일 컴포넌트를 정의하는 것이 유지 보수에 좋습니다
const Button = styled.button`
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(5);
    background-color: #fff;
  }
  ::before {
    content: "❤";
  }
  &.is-filled {
    color: red;
  }
  &.is-filled:hover {
    color: white;
    background-color: #0066ff;
  }
`;
const Lecturer = ({ instructor }) => {
  return (
    <>
      <a href={instructor[0].facebook}>
        <figure className="lecture-info">
          <img src={instructor[0].image} alt={instructor[0].name}></img>
          <figcaption>
            {instructor[0].module}을 담당 할 {instructor[0].name} 강사 Facebook
            바로가기
          </figcaption>
        </figure>
      </a>
      <Button type="button" className="is-filled">
        모듈 강사 제거
      </Button>
    </>
  );
};
export default Lecturer;
