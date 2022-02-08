import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./Pages/signup/Signup";
import Login from "./Pages/login/Login";
import MerchantSignup from "./Pages/signup/MerchantSignup";
import HomeUser from "./Pages/homepageuser/HomeUser";
import About from "./Pages/landingpage/About";
import HomeMerchant from "./Pages/homepagemerchant/HomeMerchant";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signup/merchant">
            <MerchantSignup />
          </Route>
          <Route exact path="/user/home">
            <HomeUser />
          </Route>
          <Route exact path="/merchant/home">
            <HomeMerchant />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
