import React, { useEffect, useRef, useState } from 'react';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';

function ProfileIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownEl = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [dropdownEl]);
  return (
    <div className="d-flex justify-content-end flex-1">
      <div className="dropdown" ref={dropdownEl}>
        <DropdownToggle onClick={() => setIsOpen((prev) => !prev)} />
        <DropdownMenu open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}

export default ProfileIcon;
