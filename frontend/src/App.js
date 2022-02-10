import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./Pages/signup/Signup";
import Login from "./Pages/login/Login";
import MerchantSignup from "./Pages/signup/MerchantSignup";
import HomeUser from "./Pages/homepageuser/HomeUser";
import About from "./Pages/landingpage/About";
import HomeMerchant from "./Pages/homepagemerchant/HomeMerchant";
import ShopDetails from "./Pages/merchantdetailedview/ShopDetails";
import { useState } from "react";
import Statecontext from "./context/state-context";

function App() {
  const [shopDetails, setShopDetails] = useState("");
  const [userToken, setUserToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const retrieveState = (state) => {
    setShopDetails(state);
  };

  const config = {
    headers: { Authorization: `Bearer ${userToken}` },
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Statecontext.Provider
            value={{
              userToken,
              setUserToken,
              refreshToken,
              setRefreshToken,
              config,
            }}
          >
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/user/create-account">
              <Signup />
            </Route>
            <Route exact path="/merchant/create-account">
              <MerchantSignup />
            </Route>
            <Route exact path="/users/home">
              <HomeUser liftState={retrieveState} />
            </Route>
            <Route exact path="/merchant/home">
              <HomeMerchant />
            </Route>
            <Route exact path={`/users/merchants/shop/:shopId`}>
              <ShopDetails details={shopDetails} />
            </Route>
          </Statecontext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
