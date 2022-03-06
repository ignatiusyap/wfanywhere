// dependencies
import axios from "axios";
import React, { useState, useReducer, useContext } from "react";
import Statecontext from "../../context/state-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./signup.css";
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
  const [promptUser, setPromptUser] = useState("");
  const { setUserToken, setRefreshToken } = useContext(Statecontext);
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

    if (
      Object.values(input)
        .slice(1)
        .every((value) => value !== "")
    ) {
      if (input.password !== retypePassword) {
        setPromptUser(false);
      } else {
        const shopNameToSendBack = { shop_name: shopName };
        axios
          .post(
            "https://wfanywhere.herokuapp.com/users/merchants/shop-name/",
            shopNameToSendBack
          )
          .then((res) => {
            if (res.data === "Shop not created") {
              alert("Account is not created. Contact admin!");
            } else {
              handleSignUp(res.data.id);
            }
          });
      }
    } else {
      setPromptUser(true);
    }
  };

  const handleLogin = () => {
    const dataSendToBackEnd = {
      email: input.email,
      password: input.password,
    };
    axios
      .post("https://wfanywhere.herokuapp.com/jwt/token/", dataSendToBackEnd)
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
  const handleSignUp = (id) => {
    const finalInputSendBack = {
      ...input,
      shop_id: id,
    };
    axios
      .post(
        "https://wfanywhere.herokuapp.com/users/create-account/",
        finalInputSendBack
      )
      .then((res) => {
        if (res.data === "Account not created") {
          alert("Account not created. Email address is taken!");
        } else {
          handleLogin();
        }
      });
  };

  return (
    <>
      <div class="form-body">
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3>Merchant Signup</h3>
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
                  <button class="signupbutton" onClick={passwordValidation}>
                    Sign Up
                  </button>
                  {promptUser === true ? (
                    <p>Please ensure all fields are filled up!</p>
                  ) : promptUser === false ? (
                    <p>Passwords do not match!</p>
                  ) : (
                    <></>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MerchantSignup;
