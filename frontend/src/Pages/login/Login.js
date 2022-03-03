// dependencies
import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Statecontext from "../../context/state-context";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserToken, setRefreshToken } = useContext(Statecontext);

  let history = useHistory("");

  const handleLogin = (e) => {
    e.preventDefault();
    const dataSendToBackEnd = {
      email: email,
      password: password,
    };
    axios
      .post("http://127.0.0.1:8000/jwt/token/", dataSendToBackEnd)
      .then((res) => {
        if (!res.data) {
          alert("Something wrong");
        } else {
          setUserToken(res.data.access);
          setRefreshToken(res.data.refresh);
          history.push("/users/home");
        }
      });
  };

  return (
    <div class="container">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="center">
        <form>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Email login"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
