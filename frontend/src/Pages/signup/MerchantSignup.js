// dependencies
import axios from "axios";
import React, { useState, useReducer, useEffect } from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";

// css modules

// child components

// reducer function for input field's useReducer
const changeInput = (input, action) => {
  switch (action.type) {
    case "Name":
      return { ...input, name: action.payload.input };
    case "Surname":
      return { ...input, surname: action.payload.input };
    case "Email":
      return { ...input, email: action.payload.input };
    case "Phone":
      return { ...input, phone_number: action.payload.input };
    case "Password":
      return { ...input, password: action.payload.input };
    default:
      return input;
  }
};

const MerchantSignup = () => {
  let history = useHistory();

  const [shopName, setShopName] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [input, dispatchInput] = useReducer(changeInput, {
    user_type: "Merchant",
    name: "",
    surname: "",
    phone_number: "",
    occupation: "super",
    email: "",
    password: "",
  });

  const passwordValidation = (e) => {
    e.preventDefault();
    if (input.password !== retypePassword) {
      alert("Password do not match");
    } else {
      const shopNameToSendBack = { shop_name: shopName };
      axios
        .post(
          "http://localhost:8000/users/merchants/shop-name/",
          shopNameToSendBack
        )
        .then((res) => {
          if (!res.data) {
            alert("Something wrong");
          } else {
            handleSignUp(res.data.id);
          }
        });
    }
  };
  const handleSignUp = (id) => {
    const finalInputSendBack = {
      ...input,
      shop_id: id,
    };
    axios
      .post("http://localhost:8000/users/create-account/", finalInputSendBack)
      .then((res) => {
        if (!res.data) {
          alert("Something wrong");
        } else {
          history.push("/");
        }
      });
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={shopName}
          onChange={(event) => {
            setShopName(event.target.value);
          }}
          placeholder="Merchant Name"
        />
        <input
          type="text"
          value={input.name}
          onChange={(event) => {
            dispatchInput({
              type: "Name",
              payload: { input: event.target.value },
            });
          }}
          placeholder="Name"
        />
        <input
          type="text"
          value={input.lastName}
          onChange={(event) => {
            dispatchInput({
              type: "Surname",
              payload: { input: event.target.value },
            });
          }}
          placeholder="Surname"
        />
        <input
          type="email"
          value={input.email}
          onChange={(event) => {
            dispatchInput({
              type: "Email",
              payload: { input: event.target.value },
            });
          }}
          placeholder="Email"
        />
        <input
          type="text"
          value={input.userName}
          onChange={(event) => {
            dispatchInput({
              type: "Phone",
              payload: { input: event.target.value },
            });
          }}
          placeholder="Phone Number"
        />
        <input
          type="password"
          value={input.password}
          onChange={(event) => {
            dispatchInput({
              type: "Password",
              payload: { input: event.target.value },
            });
          }}
          placeholder="Password"
        />
        <input
          type="password"
          value={retypePassword}
          onChange={(event) => {
            setRetypePassword(event.target.value);
          }}
          placeholder="Retype Password"
        />
      </form>
      <button onClick={passwordValidation}>Sign Up</button>
      {console.log(input)}
      {console.log(shopName)}
    </>
  );
};

export default MerchantSignup;
