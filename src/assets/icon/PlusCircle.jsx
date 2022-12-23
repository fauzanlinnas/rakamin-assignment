import React from "react";

const PlusCircle = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="#333"
        stroke="#333"
        d="M10.333 9.167v.5h3a.333.333 0 110 .666h-3v3a.333.333 0 11-.666 0v-3h-3a.333.333 0 110-.666h3v-3a.333.333 0 01.666 0v2.5zm-4.685-5.68a7.833 7.833 0 118.704 13.026A7.833 7.833 0 015.648 3.487zm.37 12.472A7.167 7.167 0 1013.983 4.04 7.167 7.167 0 006.019 15.96z"
      ></path>
    </svg>
  );
};

export default PlusCircle;
