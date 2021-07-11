import React, { useRef, useCallback, useContext } from "react";
import useInputs from "./useInputs";
import { UserDispatch } from "./app";
const CreateUser = () => {
  const dispatch = useContext(UserDispatch);

  const [form, onChange, reset] = useInputs({
    userName: "",
    email: "",
  });
  const { userName, email } = form;
  const nextId = useRef(3);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: (nextId.current += 1),
        userName,
        email,
      },
    });
    reset();
  };
  console.log("CreateUser");
  return (
    <div>
      <input
        name="userName"
        placeholder="계정명"
        onChange={onChange}
        value={userName}
      />
      <input
        type="email"
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button
        onClick={() => {
          onCreate();
        }}
      >
        등록
      </button>
    </div>
  );
};

export default CreateUser;
