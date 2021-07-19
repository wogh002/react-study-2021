import React, { useCallback } from "react";
import Todos from "../components/todos";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "../modules/todos";

const TodosContainer = () => {
  //디스패치 될 때 selector 함수가 이전결과와 같다면  useSelector() 훅 캐시된 결과 반환 렌더(x).
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
