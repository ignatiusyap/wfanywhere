import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayResultsUser from "../../components/DisplayResultsUser";
import { v4 as uuidv4 } from "uuid";

const HomeUser = (props) => {
  useEffect(() => {
    callShops();
  }, []);
  const [shops, setShops] = useState([]);
  const callShops = () => {
    axios
      .get("https://wfanywhere.herokuapp.com/users/merchants/all-shops/")
      .then((res) => {
        if (!res.data) {
          alert("Something wrong");
        } else {
          setShops(res.data);
        }
      });
  };

  const shopArray = [];
  shops.forEach((element) => {
    shopArray.push(
      <DisplayResultsUser
        apiCalledState={element}
        imgDescription="Shop Images"
        liftState={props.liftState}
        userToken={props.userToken}
        key={uuidv4()}
      />
    );
  });
  const randomShops = shopArray.sort(() => Math.random() - 0.5);

  return (
    <>
      {/* <DisplayResultsUser apiCalledState={} title ="Most Visited"/> */}
      <div>
        <h2>Explore New Spaces</h2>
        {randomShops}
      </div>

      {/* <DisplayResultsUser apiCalledState={} title ="Other Users Top Picks"/> */}
    </>
  );
};

export default HomeUser;
