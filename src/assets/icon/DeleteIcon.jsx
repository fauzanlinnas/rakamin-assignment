import React from "react";

const DeleteIcon = ({ className }) => {
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
        fill="currentColor"
        stroke="currentColor"
        d="M15.5 6v.5H20a.5.5 0 010 1h-1.5V19a2.5 2.5 0 01-2.5 2.5H8A2.5 2.5 0 015.5 19V7.5H4a.5.5 0 110-1h4.5V5A2.5 2.5 0 0111 2.5h2A2.5 2.5 0 0115.5 5v1zm-1.5.5h.5V5A1.5 1.5 0 0013 3.5h-2A1.5 1.5 0 009.5 5v1.5H14zm-7 1h-.5V19A1.5 1.5 0 008 20.5h8a1.5 1.5 0 001.5-1.5V7.5H7zm3.354 9.854A.5.5 0 019.5 17v-6a.5.5 0 011 0v6a.5.5 0 01-.146.354zm4 0A.5.5 0 0113.5 17v-6a.5.5 0 011 0v6a.5.5 0 01-.146.354z"
      ></path>
    </svg>
  );
};

export { DeleteIcon };
