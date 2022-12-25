import React, { useCallback, useEffect, useState } from "react";
import { PlusCircle } from "../../assets/icon";
import useAuth from "../../hooks/useAuth";
import useBoards from "../../hooks/useBoards";
import Modal from "../Modal";
import Task from "./Task";

const initialForm = {
  name: "",
  percentage: "",
};

const Board = ({ data, id, styling, boardPlace, fetchBoards, index }) => {
  const { auth } = useAuth();
  const { boards } = useBoards();

  const [tasksList, setTasksList] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [editedId, setEditedId] = useState(-1);

  const fetchTasks = useCallback(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    };

    fetch(
      `https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setTasksList(data));
  }, [auth, id]);

  useEffect(() => {
    fetchTasks();
  }, [boards, fetchTasks]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let adjustedPercentage = 0;
    if (formData.percentage > 100) adjustedPercentage = 100;
    else if (formData.percentage < 0) adjustedPercentage = 0;
    else adjustedPercentage = formData.percentage;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify({
        name: formData.name,
        progress_percentage: adjustedPercentage,
      }),
    };

    fetch(
      `https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setTasksList([...tasksList, data]))
      .finally(() => {
        setIsNewTaskModalOpen(false);
        setFormData(initialForm);
      });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify({
        name: formData.name,
        progress_percentage: formData.percentage,
      }),
    };

    fetch(
      `https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items/${editedId}`,
      requestOptions
    )
      .then((response) => fetchTasks())
      .finally(() => {
        setIsNewTaskModalOpen(false);
        setFormData(initialForm);
      });
  };

  const handleMoveTask = (taskId, target, taskName) => {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify({
        target_todo_id: target,
        name: taskName,
      }),
    };

    fetch(
      `https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items/${taskId}`,
      requestOptions
    )
      .then((response) => fetchBoards())
      .catch((err) => console.error(err));
  };

  const handleDeleteTask = (taskId) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    };

    fetch(
      `https://todo-api-18-140-52-65.rakamin.com/todos/${id}/items/${taskId}`,
      requestOptions
    )
      .then((response) => fetchTasks())
      .catch((err) => console.error(err));
  };

  return (
    <div
      className={`p-4 rounded border flex-[0_1_25%] min-w-[326px] ${styling.bgColor} ${styling.boardBorderColor}`}
    >
      <p
        className={`px-2 py-[2px] rounded border w-fit text-xs mb-2 ${styling.titleFontColor} ${styling.titleBorderColor}`}
      >
        {data.title}
      </p>
      <p className="mb-2 font-bold">{data.description}</p>
      <div className="space-y-3 mb-2">
        {tasksList.length > 0 ? (
          tasksList.map((val, i) => (
            <Task
              key={i}
              taskData={val}
              onClickDeleteTask={() => handleDeleteTask(val.id)}
              onClickMoveLeft={() =>
                handleMoveTask(val.id, boards[index - 1].id, val.name)
              }
              onClickMoveRight={() =>
                handleMoveTask(val.id, boards[index + 1].id, val.name)
              }
              onClickEdit={() => {
                setEditedId(val.id);
                setFormData({
                  name: val.name,
                  percentage: val.progress_percentage,
                });
                setIsNewTaskModalOpen(true);
              }}
              boardPlace={boardPlace}
            />
          ))
        ) : (
          <div className="rounded py-2 px-4 bg-neutral-20 border border-neutral-40">
            <p className="text-sm text-neutral-70">No Task</p>
          </div>
        )}
      </div>
      <button
        onClick={() => setIsNewTaskModalOpen(true)}
        className="flex items-center "
      >
        <PlusCircle className="mr-[5px]" />
        <p>New Task</p>
      </button>
      <Modal
        isOpen={isNewTaskModalOpen}
        title="Create Task"
        onClose={() => setIsNewTaskModalOpen(false)}
      >
        <form className="flex flex-col pt-2">
          <label
            className="mb-2 font-bold text-xs text-neutral-90"
            htmlFor="name"
          >
            Task Name
          </label>
          <input
            className="mb-4 border border-neutral-30 rounded-lg px-4 py-2"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Type your Task"
          />
          <label
            className="mb-2 font-bold text-xs text-neutral-90"
            htmlFor="percentage"
          >
            Progress
          </label>
          <input
            className="border border-neutral-30 rounded-lg px-4 py-2 w-1/3"
            id="percentage"
            type="text"
            value={formData.percentage}
            onChange={handleChange}
            placeholder="70%"
          />
          <div className="flex items-center justify-end space-x-[10px] mt-6">
            <button
              className="rounded-lg px-4 py-1 text-neutral-100 text-sm font-bold"
              onClick={() => {
                setIsNewTaskModalOpen(false);
                setFormData(initialForm);
              }}
            >
              Cancel
            </button>
            <button
              className="rounded-lg px-4 py-1 bg-primary text-white text-sm font-bold disabled:bg-neutral-70"
              onClick={editedId > 0 ? handleEdit : handleSubmit}
              disabled={!formData.name || !formData.percentage}
            >
              Save Task
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Board;
