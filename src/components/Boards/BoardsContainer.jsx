import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useBoards from "../../hooks/useBoards";
import { boardColors } from "../../utils/boardColors";
import Board from "./Board";

const BoardsContainer = () => {
  const { auth } = useAuth();
  const { boards, setBoards } = useBoards();

  const fetchBoards = () => {
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
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <div className="p-6 flex space-x-4 items-start">
      {boards.map((val, i) => {
        let boardPlace = "";

        if (i === 0) boardPlace = "start";
        else if (i === boards.length - 1) boardPlace = "end";
        else boardPlace = "between";

        return (
          <Board
            key={i}
            index={i}
            data={val}
            id={val.id}
            styling={boardColors[i % boardColors.length]}
            boardPlace={boardPlace}
            fetchBoards={fetchBoards}
          />
        );
      })}
    </div>
  );
};

export default BoardsContainer;
