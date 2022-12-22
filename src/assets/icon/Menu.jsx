import React from "react";

const Menu = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#757575"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 13a1 1 0 100-2 1 1 0 000 2zM12 13a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2z"
      ></path>
    </svg>
  );
};

export default Menu;
