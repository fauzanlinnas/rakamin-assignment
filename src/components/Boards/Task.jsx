import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Checkmark,
  DeleteIcon,
  EditIcon,
  Menu,
} from "../../assets/icon";
import OutsideClose from "../OutsideClose";

const MenuItem = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex space-x-4 items-center hover:text-primary"
    >
      {icon}
      <p className="text-sm font-semibold">{text}</p>
    </button>
  );
};

const Task = ({ taskData }) => {
  const isComplete = taskData.progress_percentage === 100;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-4 rounded bg-[#FAFAFA] border border-neutral-40">
      <p className="pb-2 mb-2 border-b border-dashed border-neutral-40">
        {taskData.name}
      </p>
      <div className="flex items-center">
        <div className="flex items-center flex-1">
          <div className="relative bg-neutral-30 h-4 w-full rounded-full overflow-hidden mr-3">
            <div
              style={{ width: `${taskData.progress_percentage}%` }}
              className={`absolute left-0 top-0 h-full bg-${
                isComplete ? "success" : "primary"
              }`}
            ></div>
          </div>
          {isComplete ? (
            <Checkmark />
          ) : (
            <p className="text-xs text-neutral-70">
              {taskData.progress_percentage}%
            </p>
          )}
        </div>
        <div className="relative flex items-center">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="ml-[26px] rounded hover:bg-neutral-30" />
          </button>
          {isMenuOpen && (
            <OutsideClose setIsOpen={setIsMenuOpen}>
              <div className="w-[320px] px-4 py-[14px] rounded-lg mt-3 absolute top-5 left-[26px] bg-white shadow-rakamin space-y-3">
                <MenuItem icon={<ArrowRight />} text="Move Right" />
                <MenuItem icon={<ArrowLeft />} text="Move Left" />
                <MenuItem icon={<EditIcon />} text="Edit" />
                <MenuItem icon={<DeleteIcon />} text="Delete" />
              </div>
            </OutsideClose>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
