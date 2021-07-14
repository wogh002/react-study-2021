import React from "react";
import Count from "./count";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increase, decrease, setDiff } from "./module/counter";
const CounterContainer = (props) => {
  //리덕스와의 관계 컴포넌트
  const { number, diff } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Count
      number={number > 0 ? number : 0}
      diff={diff}
      onSetDiff={onSetDiff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default CounterContainer;
