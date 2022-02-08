import axios from "axios";
import React, { useState, useReducer, useEffect } from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import DisplayResultsUser from "../../components/DisplayResultsUser";

const HomeUser = () => {
  useEffect(() => {
    callShops();
  }, []);
  const [shops, setShops] = useState("");
  const callShops = () => {
    axios.get("http://localhost:8000/merchant/all-shops/").then((res) => {
      if (!res.data) {
        alert("Something wrong");
      } else {
        console.log("hello", res.data);
        setShops(res.data);
      }
    });
  };
  return (
    <>
      <div>Homeuser</div>
      {/* <DisplayResultsUser apiCalledState={} title ="Most Visited"/> */}
      <DisplayResultsUser
        apiCalledState={shops}
        title="Explore New Places"
        imgDescription="Shop Images"
      />
      {/* <DisplayResultsUser apiCalledState={} title ="Other Users Top Picks"/> */}
    </>
  );
};

export default HomeUser;
