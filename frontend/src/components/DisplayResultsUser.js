import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./displayresultsuser.css";
const DisplayResultsUser = (props) => {
  // useEffect(() => {
  //   if (
  //     window.location.href ===
  //     `http://127.0.0.1:3000/users/merchants/shop/${props.apiCalledState.id}`
  //   ) {
  //     window.location.replace("http://127.0.0.1:3000/login");
  //   }
  // }, [props.userToken]);
  let history = useHistory();
  const clickForDetailedView = () => {
    if (props.userToken !== "") {
      history.push(`merchants/shop/${props.apiCalledState.id}`);
      props.liftState(props.apiCalledState);
    }
  };
  return (
    <div class="shopcontainer">
      <div class="card">
        <div class="face face1" onClick={clickForDetailedView}>
          <div class="content">
            <h2 class="details">{props.apiCalledState.shop_name}</h2>
            {props.userToken === "" && (
              <p class="details">Log in to click for more details</p>
            )}
          </div>
          <div class="face face2">
            <img
              src={props.apiCalledState.image_url}
              alt={props.imgDescription}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayResultsUser;
