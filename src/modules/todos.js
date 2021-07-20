//노예이름
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
//노예들이 할 일
let nextId = 0;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    text,
    id: ++nextId,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
//초기 state
export const initalState = [
  //{text:'aa' , id:1 , done : false }
];

//리듀서
export default function todos(state = initalState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.todo];
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    }
    default:
      return state;
  }
}
