import { useContext } from "react";
import BoardsContext from "../context/BoardsProvider";

const useBoards = () => {
  return useContext(BoardsContext);
};

export default useBoards;
