import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useBoards from "../../hooks/useBoards";
import { boardColors } from "../../utils/boardColors";
import Board from "./Board";

const BoardsContainer = () => {
  const { auth } = useAuth();
  const { boards, setBoards } = useBoards();

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
      .then((data) => setBoards(data));
  }, []);

  return (
    <div className="p-6 flex space-x-4 items-start">
      {boards.map((val, i) => (
        <Board
          data={val}
          key={i}
          id={val.id}
          styling={boardColors[i % boardColors.length]}
        />
      ))}
    </div>
  );
};

export default BoardsContainer;
