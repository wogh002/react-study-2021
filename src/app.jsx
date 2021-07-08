import React, { useRef, useState, useMemo, useCallback } from "react";
import "./index.css";
import UserList from "./userList";
import CreateUser from "./createUser";
function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중 ...");
  return users.filter((user) => user.active).length;
}
const App = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
  });
  const [users, setUsers] = useState([
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
  ]);
  const { userName, email } = inputs;

  //useCallback 을 사용하는 이유
  //매번 컴포넌트가 호출 될 때마다 함수가 생성이된다.(비효율적)
  //함수를 메모리에 저장해놓고 사용한다.
  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  const onReset = useCallback(() => {
    setInputs({
      userName: "",
      email: "",
    });
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);
  //. 반면 useRef로 감싸진 current가 가리키는 값은 React에 의해 기억되기에
  // 직접 변경하기 전까지 해당 컴포넌트가 호출될 때마다 동일합니다.
  const nextId = useRef(3);

  const onCreate = useCallback(() => {
    const user = {
      id: (nextId.current += 1),
      userName: "",
      email: "",
    };
    // setUsers(users.concat(user)); 배열을 합쳐준다. 추가된 새로운 배열을 반환합니다.
    setUsers((users) => [...users, user]);
    onReset();
  }, [onReset]);

  const onRemove = useCallback((removeId) => {
    setUsers((users) => users.filter((user) => user.id !== removeId));
  }, []);
  //useMemo는 deps가 변경되었을 때에만 메모이제이션된 값만 다시 계산 할 것입니다.
  //변경이 되지 않았다면 이전에 만들어 놓았던 것을 재사용.
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        userName={userName}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>
        <h1>활성 사용자 수 : {count}</h1>
      </div>
    </>
  );
};
export default App;
