import { useEffect } from "react";
import "./App.css";
import BoardsContainer from "./components/Boards/BoardsContainer";
import Header from "./components/Header";
import useAuth from "./hooks/useAuth";
import useLogin from "./hooks/useLogin";

function App() {
  const login = useLogin();
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth) {
      login();
    }
  });

  return (
    <div>
      {auth ? (
        <>
          <Header />
          <BoardsContainer />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
