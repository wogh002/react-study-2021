//modules 폴더는 ducks 패턴.
//문자열 앞에 접두사(파일 앞 부분)를 붙힌다. 다른 모듈과 중복되지 않기 위함.
//액션 타입! (대문자)
const SET_DIFF = "counter/SET_DIFF"; //몇씩 증가,감소 할지 정해주는 변수
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 생성함수
export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff,
});
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});

//리듀서에서 관리할 초기 상태.
const initalState = {
  number: 0,
  diff: 1,
};

export default function counter(state = initalState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
