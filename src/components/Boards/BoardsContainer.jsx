import React, { useEffect, useState } from "react";
import Board from "./Board";

const BoardsContainer = () => {
  const [boardList, setBoardList] = useState([]);
  console.log("boardList", boardList);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    fetch("https://todo-api-18-140-52-65.rakamin.com/todos", requestOptions)
      .then((response) => response.json())
      .then((data) => setBoardList(data));
  }, []);

  return (
    <div className="p-6 flex space-x-4 items-start">
      {boardList.map((val, i) => (
        <Board data={val} key={i} />
      ))}
    </div>
  );
};

export default BoardsContainer;
