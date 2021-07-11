import React, { memo } from "react";
import User from "./user";
const UserList = memo(
  ({ users }) => {
    console.log("UserList");
    return (
      <ul>
        {users.map((item) => (
          <User user={item} key={users.id} />
        ))}
      </ul>
    );
  },
  (prevProps, nextProps) => nextProps.users === prevProps.users
  //React.memo 에서 두번째 파라미터에 propsAreEqual 이라는 함수
  //true를 반환하게 되면 리랜더링 하지 않겠다.
  //하지만, 이걸 잘못사용한다면 오히려 의도치 않은 버그들이 발생하기 쉽습니다.
  //예를 들어서, 함수형 업데이트로 전환을 안했는데 이렇게 users 만 비교를 하게 된다면,
  // onToggle 과 onRemove 에서 최신 users 배열을 참조하지 않으므로 심각한 오류가 발생 할 수 있습니다.
);

export default UserList;
