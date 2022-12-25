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

const MenuItem = ({ icon, text, onClick, isDelete }) => {
  return (
    <button
      onClick={onClick}
      className={`flex space-x-4 py-[6px] w-full items-center hover:text-${
        isDelete ? "danger" : "primary"
      }`}
    >
      {icon}
      <p className="text-sm font-semibold">{text}</p>
    </button>
  );
};

const Task = ({
  taskData,
  onClickDeleteTask,
  onClickMoveLeft,
  onClickMoveRight,
  onClickEdit,
  boardPlace,
}) => {
  const isComplete = taskData.progress_percentage === 100;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-4 rounded bg-neutral-20 border border-neutral-40">
      <p className="pb-2 mb-2 border-b border-dashed border-neutral-40">
        {taskData.name}
      </p>
      <div className="flex items-center">
        <div className="flex items-center flex-1">
          <div className="relative bg-neutral-30 h-4 w-full rounded-full overflow-hidden mr-3">
            <div
              style={{ width: `${taskData.progress_percentage}%` }}
              className={`absolute left-0 top-0 h-full ${
                isComplete ? "bg-success" : "bg-primary"
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
              <div className="w-[320px] px-4 py-2 rounded-lg mt-3 absolute top-5 left-[26px] bg-white shadow-rakamin">
                {!(boardPlace === "end") && (
                  <MenuItem
                    icon={<ArrowRight />}
                    text="Move Right"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onClickMoveRight();
                    }}
                  />
                )}

                {!(boardPlace === "start") && (
                  <MenuItem
                    icon={<ArrowLeft />}
                    text="Move Left"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onClickMoveLeft();
                    }}
                  />
                )}

                <MenuItem
                  icon={<EditIcon />}
                  text="Edit"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onClickEdit();
                  }}
                />
                <MenuItem
                  icon={<DeleteIcon />}
                  text="Delete"
                  isDelete={true}
                  onClick={() => {
                    setIsMenuOpen(false);
                    onClickDeleteTask();
                  }}
                />
              </div>
            </OutsideClose>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
