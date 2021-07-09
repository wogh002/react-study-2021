import React, { useRef, useReducer, useMemo, useCallback } from "react";
import "./index.css";
import UserList from "./userList";
import CreateUser from "./createUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중 ...");
  return users.filter((user) => user.active).length;
}
const initalState = {
  inputs: { userName: "", email: "" },
  users: [
    {
      id: 1,
      userName: "jaeho",
      email: "ekekekekek@gmail.com",
      active: false,
    },
    {
      id: 2,
      userName: "ham",
      email: "eke@gmail.com",
      active: false,
    },
    {
      id: 3,
      userName: "tataatata",
      email: "ekekekekek@gmail.com",
      active: false,
    },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        inputs: initalState.inputs,
        users: [...state.users, action.user],
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const nextId = useRef(3);

  const { users } = state;
  const { userName, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);
  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: (nextId.current += 1),
        userName,
        email,
      },
    });
  }, [userName, email]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      active: true,
      id,
    });
  }, []);
  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);
  const count = countActiveUsers(users);
  return (
    <>
      <CreateUser
        userName={userName}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>
        <h1>활성 사용자 수 : {count}</h1>
      </div>
    </>
  );
};
export default App;
