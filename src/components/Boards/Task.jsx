import React from "react";
import Checkmark from "../../assets/icon/Checkmark";
import Menu from "../../assets/icon/Menu";

const Task = () => {
  return (
    <div className="p-4 rounded bg-[#FAFAFA] border border-[#E0E0E0]">
      <p className="pb-2 mb-2 border-b border-dashed border-[#E0E0E0]">
        Re-designed the zero-g doggie bags. No more spills!
      </p>
      <div className="flex items-center">
        <div className="flex items-center w-full">
          <div className="relative bg-[#EDEDED] h-4 w-full rounded-full overflow-hidden mr-3">
            <div className="absolute left-0 top-0 h-full bg-[#43936C] w-[10%] "></div>
          </div>
          <Checkmark />
        </div>
        <Menu className="ml-[26px]" />
      </div>
    </div>
  );
};

export default Task;
