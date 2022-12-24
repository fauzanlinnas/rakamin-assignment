import React from "react";

const ArrowRight = ({ className }) => {
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
        d="M17.454 11.8h0l.003.01a.5.5 0 010 .38h0l-.003.01a.497.497 0 01-.102.16l-4.996 4.996-.001.002a.5.5 0 01-.71 0l-.003-.003a.496.496 0 01-.11-.547.498.498 0 01.11-.163l.001-.001 3.3-3.29.857-.854H7a.5.5 0 110-1h8.8l-.857-.854-3.3-3.29s0 0 0 0a.504.504 0 01.713-.713l.352-.351-.352.351 4.996 4.996a.497.497 0 01.102.162z"
      ></path>
    </svg>
  );
};

export { ArrowRight };
