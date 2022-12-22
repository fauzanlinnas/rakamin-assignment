import React from "react";
import Plus from "../assets/icon/Plus";

const Header = () => {
  return (
    <header className="px-5 py-[18px] flex items-center border-b border-rakamin-grey">
      <h1 className="text-lg font-bold mr-2.5">Product Roadmap</h1>
      <button className="text-xs font-bold text-white flex items-center bg-primary px-4 py-2 rounded-lg">
        <Plus className="mr-1" />
        Add New Group
      </button>
    </header>
  );
};

export default Header;
