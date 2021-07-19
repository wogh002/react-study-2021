import React, { useState, memo } from "react";

const TodoItem = memo(({ todo, onToggle }) => {
  return (
    <li
      style={{ textDecoration: todo.done ? "line-through" : "none" }}
      onClick={() => {
        onToggle(todo.id);
      }}
    >
      {todo.text}
    </li>
  );
});

const TodoList = memo(({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle}></TodoItem>
      ))}
    </ul>
  );
});

const Todos = ({ todos, onCreate, onToggle }) => {
  //리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리하는건 아니다.
  //필요한경우 컴포넌트 내부에서 useState 훅 사용해서 상태관리해도 ㄱㅊ
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
          placeholder="할 일을 입력하세요 "
        />
        <button>등록</button>
        <TodoList todos={todos} onToggle={onToggle} />
      </form>
    </div>
  );
};
export default Todos;
