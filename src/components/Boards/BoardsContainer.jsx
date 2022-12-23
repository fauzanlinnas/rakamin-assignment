import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Board from "./Board";

const BoardsContainer = () => {
  const { auth } = useAuth();

  const [boardList, setBoardList] = useState([]);
  console.log("boardList", boardList);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
      },
    };
    fetch("https://todo-api-18-140-52-65.rakamin.com/todos", requestOptions)
      .then((response) => response.json())
      .then((data) => setBoardList(data));
  }, []);

  return (
    <div className="p-6 flex space-x-4 items-start">
      {boardList.map((val, i) => (
        <Board data={val} key={i} id={val.id} />
      ))}
    </div>
  );
};

export default BoardsContainer;
