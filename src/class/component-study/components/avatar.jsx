import React from 'react';

const Avatar = (props) => (
    <img
        className="avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
    />
);

export default Avatar; 