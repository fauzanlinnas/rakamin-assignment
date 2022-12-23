import useAuth from "./useAuth";

const useLogin = () => {
  const { setAuth } = useAuth();

  const login = () => {
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
        setAuth(data.auth_token);
      });
  };

  return login;
};

export default useLogin;
