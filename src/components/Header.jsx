import React, { useState } from "react";
import Plus from "../assets/icon/Plus";
import Modal from "./Modal";

const Header = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
      }),
    };
    fetch(
      "https://todo-api-18-140-52-65.rakamin.com/todos",
      requestOptions
    ).then((response) => console.log(response));
  };

  return (
    <header className="px-5 py-[18px] flex items-center border-b border-neutral-40">
      <h1 className="text-lg font-bold mr-2.5">Product Roadmap</h1>
      <button
        onClick={() => setIsCreateGroupModalOpen(true)}
        className="text-xs font-bold text-white flex items-center bg-primary px-4 py-2 rounded-lg"
      >
        <Plus className="mr-1" />
        Add New Group
      </button>
      <Modal
        isOpen={isCreateGroupModalOpen}
        title="Create Group"
        onClose={() => setIsCreateGroupModalOpen(false)}
      >
        <form className="flex flex-col pt-2">
          <label
            className="mb-2 font-bold text-xs text-neutral-90"
            htmlFor="title"
          >
            Group Title
          </label>
          <input
            className="mb-4 border border-rakamin-grey rounded-lg px-4 py-2"
            id="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Type Group Title"
          />
          <label
            className="mb-2 font-bold text-xs text-neutral-90"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="border border-rakamin-grey rounded-lg px-4 py-2"
            id="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            placeholder="Type Group Description"
          />
          <div className="flex items-center justify-end space-x-[10px] mt-6">
            <button
              className="rounded-lg px-4 py-1 text-neutral-100 text-sm font-bold"
              onClick={() => setIsCreateGroupModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="rounded-lg px-4 py-1 bg-primary text-white text-sm font-bold"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </Modal>
    </header>
  );
};

export default Header;
