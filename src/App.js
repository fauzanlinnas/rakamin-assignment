import { useEffect } from "react";
import "./App.css";
import BoardsContainer from "./components/BoardsContainer";
import Header from "./components/Header";

function App() {
  useEffect(() => {
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
      .then((data) => localStorage.setItem("token", data.auth_token));
  }, []);

  return (
    <div>
      <Header />
      <BoardsContainer />
    </div>
  );
}

export default App;
