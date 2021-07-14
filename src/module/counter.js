//노예 생성
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const SET_DIFF = "SET_DIFF";
//노예동작생성
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});
export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff,
});
//초기스테이트
const initalState = {
  number: 0,
  diff: 1,
};
//리듀서
export const countReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number < 0 ? 0 : state.number - state.diff,
      };
    default:
      return state;
  }
};
