import { useEffect, useState } from "react";
import "./App.css";
import BoardsContainer from "./components/Boards/BoardsContainer";
import Header from "./components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setIsLoggedIn(true);
    else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "fauzanlinnas@gmail.com",
          password: "asdfgh",
        }),
      };
      fetch(
        "https://todo-api-18-140-52-65.rakamin.com/auth/login",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("token", data.auth_token);
          setIsLoggedIn(true);
        });
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
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
