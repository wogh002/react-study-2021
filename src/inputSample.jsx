import React, { useState, useRef } from "react";

const InputSample = (props) => {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });
  const nameInput = useRef();
  const { name, nickName } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    nameInput.current.focus();
    setInputs({
      name: "",
      nickName: "",
    });
  };
  return (
    <div>
      <input
        ref={nameInput}
        placeholder="이름"
        name="name"
        onChange={onChange}
        value={name}
      />
      <input
        placeholder="닉네임"
        name="nickName"
        onChange={onChange}
        value={nickName}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name}({nickName})
      </div>
    </div>
  );
};

export default InputSample;
