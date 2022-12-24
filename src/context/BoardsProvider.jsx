import { createContext, useState } from "react";

const BoardsContext = createContext({});

export const BoardsProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);

  return (
    <BoardsContext.Provider value={{ boards, setBoards }}>
      {children}
    </BoardsContext.Provider>
  );
};

export default BoardsContext;
