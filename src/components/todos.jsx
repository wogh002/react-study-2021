import React, { useState, memo } from "react";

const TodoListItem = ({ todo, onToggle }) => {
  return (
    <li
      onClick={() => {
        onToggle(todo.id);
      }}
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
    >
      {todo.text}
    </li>
  );
};
const TodoList = memo(({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

const Todos = ({ todos, onCreate, onToggle }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        placeholder="오늘 할 일 입력하세요"
        value={text}
      ></input>
      <button type="submit">전송!</button>
      <TodoList todos={todos} onToggle={onToggle} />
    </form>
  );
};
export default Todos;
