import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../stores/AuthSlice';

function DropdownMenu({ open, onClose }) {
  const dispatch = useDispatch();
  const user = useSelector(({ auth: { user } }) => user);
  const handlelogout = () => {
    dispatch(logout());
  };
  return (
    <ul
      className={`dropdown-menu end-0 px-2 mt-1 border shadow-sm rounded-xl w-sm-90 ${
        open ? 'd-block' : ''
      }`}
    >
      <li>
        {user.firstName} {user.lastName}
      </li>
      <li>
        <button
          className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
          onClick={handlelogout}
        >
          <i className="fas fa-sign-out-alt rounded-circle p-2 text-black text-5 bg-gray-300" />
          <small className="text-black fw-bold">Log Out</small>
        </button>
      </li>
    </ul>
  );
}

export default DropdownMenu;
