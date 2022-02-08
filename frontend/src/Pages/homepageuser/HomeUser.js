import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayResultsUser from "../../components/DisplayResultsUser";

const HomeUser = (props) => {
  useEffect(() => {
    callShops();
  }, []);
  const [shops, setShops] = useState([]);
  const callShops = () => {
    axios
      .get("http://localhost:8000/users/merchants/all-shops/")
      .then((res) => {
        if (!res.data) {
          alert("Something wrong");
        } else {
          setShops(res.data);
        }
      });
  };
  const randomShops = () => {
    const shopArray = [];
    shops.forEach((element) => {
      shopArray.push(
        <>
          <DisplayResultsUser
            apiCalledState={element}
            imgDescription="Shop Images"
            liftState={props.liftState}
          />
        </>
      );
    });
    const randomShops = shopArray.sort(() => Math.random() - 0.5);
    return randomShops;
  };

  return (
    <>
      <div>Homeuser</div>
      {/* <DisplayResultsUser apiCalledState={} title ="Most Visited"/> */}
      <div>
        <div className="display-results-header">Explore New Places</div>
        {randomShops()}
      </div>

      {/* <DisplayResultsUser apiCalledState={} title ="Other Users Top Picks"/> */}
    </>
  );
};

export default HomeUser;
