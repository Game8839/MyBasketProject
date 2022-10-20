import React from 'react';
import { useSelector } from 'react-redux';
import HeaderAuth from './HeaderAuth';
import HeaderHome from './HeaderHome';

function Header() {
  const user = useSelector(({ auth: { user } }) => user);
  return (
    <nav class="navbar navbar-expand-lg navbar-light  navbg">
      {user ? <HeaderHome /> : <HeaderAuth />}
    </nav>
  );
}

export default Header;
