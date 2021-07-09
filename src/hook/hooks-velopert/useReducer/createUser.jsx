import React, { useRef, memo } from "react";

const CreateUser = memo(({ userName, email, onChange, onCreate }) => {
  console.log("Create user");
  const userId = useRef();
  return (
    <div>
      <input
        ref={userId}
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
          userId.current.focus();
          onCreate();
        }}
      >
        등록
      </button>
    </div>
  );
});

export default CreateUser;
