import React, { useState, useReducer, useEffect } from "react";

const DisplayResultsUser = (props) => {
  const state = props.apiCalledState;
  return (
    <>
      <div className="display-results-header">{props.title}</div>
      {/* {state.map((each) => {
        return (
          <div>
            <div className="result-header">{each.shop_name}</div>
            <div>
              <img src={each.image_url} alt={props.imgDescription} />
            </div>
          </div>
        );
      })} */}
      {console.log("hello", state)}
    </>
  );
};

export default DisplayResultsUser;
