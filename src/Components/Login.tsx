import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AutoContext";
import axios from "axios";

export const Login = () => {
  const { auth, setAuht } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const hanldeChangeInput = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (userName != "" && password != "") {
  //       axios
  //         .post("http://localhost:60578/login", {
  //           userName: userName,
  //           password: password,
  //         })
  //         .then((response) => {
  //           console.log(response.data);
  //         });
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:60578/login", {
      userName: userName,
      password: password,
    });
    if (result && result.data) {
      console.dir(result);
      console.log(result);
    }
  };

  return (
    <form method="post" action="/" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="userName"
        value={userName}
        placeholder="Usuario"
        onChange={hanldeChangeInput}
        required
      ></input>
      <input
        name="password"
        type="password"
        value={password}
        placeholder="Contraseña"
        onChange={hanldeChangeInput}
        required
      ></input>
      <button type="submit">Enviar</button>
    </form>
  );
};
