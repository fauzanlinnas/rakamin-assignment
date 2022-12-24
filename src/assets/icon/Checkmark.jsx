import React from "react";

const Checkmark = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <g clipPath="url(#clip0_3261_258)">
        <path fill="#43936C" d="M8 16A8 8 0 108 0a8 8 0 000 16z"></path>
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.6 7.891l1.6 1.6L10.291 6.4"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3261_258">
          <path
            fill="#fff"
            d="M0 0H16V16H0z"
            transform="rotate(-90 8 8)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export { Checkmark };
