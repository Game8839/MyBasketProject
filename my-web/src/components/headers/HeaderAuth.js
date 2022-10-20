import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../../stores/AuthSlice';
import Logo from './Logo';

function HeaderAuth() {
  const login = useSelector(({ auth: { login } }) => login);
  const dispatch = useDispatch();
  return (
    <div className="container-fluid d-flex">
      <Logo />
      <button
        className="btn btn-light"
        type="button"
        onClick={() => {
          dispatch(setLogin());
        }}
      >
        <span>{login ? 'Register' : 'Login'}</span>
      </button>
    </div>
  );
}

export default HeaderAuth;
