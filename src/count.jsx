import React from "react";

const Count = ({ number, diff, onSetDiff, onIncrease, onDecrease }) => {
  const onChange = ({ target }) => {
    onSetDiff(parseInt(target.value, 10));
  };
  return (
    <>
      <h1>{number}</h1>
      <input type="number" value={diff} onChange={onChange}></input>
      <button type="button" onClick={onIncrease}>
        +
      </button>
      <button type="button" onClick={onDecrease}>
        -
      </button>
    </>
  );
};

export default Count;
