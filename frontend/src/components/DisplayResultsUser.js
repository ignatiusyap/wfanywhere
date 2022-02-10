import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
    <div onClick={clickForDetailedView}>
      <div>
        <img src={props.apiCalledState.image_url} alt={props.imgDescription} />
      </div>
      <div>
        <div className="result-header">{props.apiCalledState.shop_name}</div>
      </div>
    </div>
  );
};

export default DisplayResultsUser;
