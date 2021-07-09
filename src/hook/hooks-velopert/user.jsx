import React, { useEffect, memo } from "react";

const User = memo(
  ({ user, user: { id, userName, email, active }, onRemove, onToggle }) => {
    console.log("User");
    // useEffect(() => {
    //   console.log("컴포넌트가 마운트 되었을 때 호출");
    //   //props 로 받은 값을 component의 state로 설정할 때
    //   //REST API 요청
    //   //setInterval,setTimeOut
    //   //DOM접근.
    //   return () => {
    //     //cleanUp 함수.이다.
    //     //setInterval,setTimeOut 제거. 할때
    //     //라이브러리 인스턴스 제거.
    //     console.log("컴포넌트가 돔에서 언마운트 되기 직전 호출.");
    //   };
    // }, []);
    useEffect(() => {
      console.log("user 값이 설정 됌");
      return () => {
        console.log("user값이 돔에서 언마운트 되기 직전 호출.");
      };
    }, [user]);
    return (
      <li>
        <span>{id} : </span>
        <span
          style={{ color: active ? "green" : "black", cursor: "pointer" }}
          onClick={() => {
            onToggle(id);
          }}
        >
          {userName} :
        </span>
        &nbsp;
        <span>{email}</span>
        <button
          onClick={() => {
            onRemove(id);
          }}
        >
          제거버튼
        </button>
      </li>
    );
  }
);

export default User;
