import React, { useState, useRef } from "react";

export function DropdownMenu({ triggerLabel, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 border rounded-lg flex items-center justify-between w-64"
      >
        {triggerLabel}
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded-lg shadow-md w-64 p-2 z-10">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onClick: closeDropdown })
          )}
        </div>
      )}
    </div>
  );
}
