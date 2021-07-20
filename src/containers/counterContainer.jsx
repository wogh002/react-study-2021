import React from "react";
import Counter from "../components/counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { decrease, increase, setDiff } from "../modules/counter";

const CounterContainer = () => {
  //선택자 함수(selector function)
  //, Redux 스토어의 현재 상태(state)를 가져올 때 사용한다. 내가 원하는걸 빼오자.
  // selector 함수는 이전결과와 다르다면 useSelector() 훅은 강제로 다시 렌더링한다.
  const { number, diff } = useSelector((state) => {
    return {
      number: state.counter.number,
      diff: state.counter.diff,
    };
  }, shallowEqual);
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
