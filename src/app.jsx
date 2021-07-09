import React, { useRef, useReducer, createContext, useCallback } from "react";
import "./index.css";
import UserList from "./userList";
import CreateUser from "./createUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중 ...");
  return users.filter((user) => user.active).length;
}
const initalState = {
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
    case "CREATE_USER":
      return {
        users: [...state.users, action.user],
      };
    case "TOGGLE_USER":
      return {
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};
export const UserDispatch = createContext(null);
//dispatch 를 관리하고자 하는 컨텍스트 생성.

const App = () => {
  console.log("APPP");
  const [state, dispatch] = useReducer(reducer, initalState);
  const { users } = state;

  const count = countActiveUsers(users);
  return (
    <UserDispatch.Provider value={dispatch}>
      <>
        <CreateUser />
        <UserList users={users} />
        <div>
          <h1>활성 사용자 수 : {count}</h1>
        </div>
      </>
    </UserDispatch.Provider>
  );
};
export default App;
