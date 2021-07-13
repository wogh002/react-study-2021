import React from "react";

import { createStore } from "redux";
const initalState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

//액션 타입은 대문자로 작성
//액션생성함수
const increase = () => ({
  type: INCREASE,
});
const decrease = () => ({
  type: DECREASE,
});
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

//default value initalState가 왜 필요할까?
//redux 에서 초기 상태를 만들 때 리듀서를 한번 호출한다.
//그 시점에 state가 undefined 이니까.
function reducer(state = initalState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.item],
      };
    default:
      return state;
  }
}
const store = createStore(reducer);
const listener = () => {
  const state = store.getState();
  console.log(state);
};
//구독을 설정하고 디스패치를 하면 액션이 디스패치 될 때마다 현재 상태가 나온다.
const unsubscribe = store.subscribe(listener); //구독설정.

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));

const App = (props) => <h1>Hello redux!</h1>;

export default App;
