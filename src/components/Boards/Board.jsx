import React from "react";
import PlusCircle from "../../assets/icon/PlusCircle";
import Task from "./Task";

const Board = ({ data }) => {
  return (
    <div className="p-4 rounded bg-[#F7FEFF] border border-primary flex-[0_1_25%]">
      <p className="px-2 py-[2px] rounded border border-primary w-fit text-primary text-xs mb-2">
        {data.title}
      </p>
      <p className="mb-2 font-bold">{data.description}</p>
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

export default Board;
