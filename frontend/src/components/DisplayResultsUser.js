import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DisplayResultsUser = (props) => {
  let history = useHistory();
  const clickForDetailedView = () => {
    history.push(`merchants/shop/${props.apiCalledState.id}`);
    props.liftState(props.apiCalledState);
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
