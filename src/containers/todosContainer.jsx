import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";
import Todos from "../components/todos";

const TodosContainer = () => {
  //useSelector 훅을 이용해 state를 가져오자.
  const todos = useSelector((state) => state.todos);
  //useDispatch() 훅을가져오자
  const dispatch = useDispatch();
  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
