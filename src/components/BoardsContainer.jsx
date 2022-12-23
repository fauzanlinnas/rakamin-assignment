import React from "react";
import Checkmark from "../assets/icon/Checkmark";
import Menu from "../assets/icon/Menu";
import PlusCircle from "../assets/icon/PlusCircle";

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

const Board = () => {
  return (
    <div className="p-4 rounded bg-[#F7FEFF] border border-primary flex-[0_1_25%]">
      <p className="px-2 py-[2px] rounded border border-primary w-fit text-primary text-xs mb-2">
        Group Task 1
      </p>
      <p className="mb-2 font-bold">January - March</p>
      <div className="space-y-3 mb-2">
        <Task />
      </div>
      <div className="flex items-center">
        <PlusCircle className="mr-[5px]" />
        <p>New Task</p>
      </div>
    </div>
  );
};

const BoardsContainer = () => {
  return (
    <div className="p-6 flex space-x-4 items-start">
      <Board />
    </div>
  );
};

export default BoardsContainer;
