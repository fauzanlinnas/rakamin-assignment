import React, { useRef, useEffect } from "react";

const OutsideClose = ({ children, setIsOpen }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="z-10">
      {children}
    </div>
  );
};

export default OutsideClose;
