// dependencies
import axios from "axios";
import React, { useState, useReducer, useEffect } from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/users/login/").then((res) => {
      if (res.data !== true) {
        alert("Something wrong");
      } else {
        history.push("/home");
      }
    });
  };

  return (
    <>
      <div>
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
      </div>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
