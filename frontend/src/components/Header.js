import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ userToken, setUserToken }) => {
  const handleLogout = () => {
    setUserToken("");
  };

  const linkAbout = <Link to="/">About</Link>;

  const linkLogin = <Link to="/login">Members Login</Link>;

  const linkLogout = (
    <Link to="/">
      {" "}
      <button onClick={handleLogout}>Logout</button>
    </Link>
  );

  const linkSignUp = <Link to="/user/create-account">Members Signup</Link>;

  const linkMerchantSignUp = (
    <Link to="/merchant/create-account">Merchant Signup</Link>
  );

  const linkSpaces = <Link to="/users/home">Spaces</Link>;

  return (
    <>
      <div id="mainroutes">
        {linkAbout}
        {linkSpaces}
      </div>
      <div id="conditionalroutes">
        {!userToken && linkLogin}
        {userToken && linkLogout}
        {!userToken && linkMerchantSignUp}
        {!userToken && linkSignUp}
      </div>
    </>
  );
};

export default Header;
