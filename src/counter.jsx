import React, { useState } from "react";

const Counter = (props) => {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    //update 함수 (최적화 시키는 것 과 관련있다)
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
