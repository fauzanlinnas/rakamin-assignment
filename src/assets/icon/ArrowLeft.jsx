import React from "react";

const ArrowLeft = ({ className }) => {
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
        d="M9.057 10.646L8.2 11.5H17a.5.5 0 110 1H8.2l.857.854 3.3 3.29h0a.498.498 0 010 .71h0l-.002.004a.5.5 0 01-.71 0l-.002-.002-4.995-4.995a.5.5 0 01-.102-.162h0l-.004-.01a.5.5 0 010-.38v.001l.004-.01a.5.5 0 01.102-.161l4.995-4.996a.504.504 0 01.714.713s0 0 0 0l-3.3 3.29z"
      ></path>
    </svg>
  );
};

export { ArrowLeft };
