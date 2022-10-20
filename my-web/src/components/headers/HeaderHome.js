import React from 'react';
import Logo from './Logo';
import ProfileIcon from './ProfileIcon';
import Selection from './Selection';

function HeaderHome() {
  return (
    <nav className="navbar navbar-expand-sm bg-white shadow-sm py-0 fixed-top">
      <div className="container-fluid mx-1">
        <Logo />
        <Selection />

        <ProfileIcon />
      </div>
    </nav>
  );
}

export default HeaderHome;
