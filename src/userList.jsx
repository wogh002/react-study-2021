import React from "react";
import User from "./user";
const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <ul>
      {users.map((item) => (
        <User
          user={item}
          key={users.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default UserList;
