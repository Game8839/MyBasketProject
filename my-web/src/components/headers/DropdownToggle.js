import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar';

function DropDownToggle({ onClick }) {
  const user = useSelector(({ auth: { user } }) => user);
  console.log(user);
  return (
    <div onClick={onClick}>
      <Avatar src={user.profileImage} size="40" />
    </div>
  );
}

export default DropDownToggle;
