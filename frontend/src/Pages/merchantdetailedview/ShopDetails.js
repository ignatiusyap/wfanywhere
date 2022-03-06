import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Review from "../writereview/Review";
import { v4 as uuidv4 } from "uuid";
import Statecontext from "../../context/state-context";
import jwt from "jwt-decode";
import DisplayReview from "./DisplayReview";
import "./shopdetails.css";

const ShopDetails = (props) => {
  const [allReviews, setAllReviews] = useState([]);
  const [userData, setUserData] = useState([]);
  const [triggerRender, setTriggerRender] = useState(false);
  let { shopId } = useParams();
  const { userToken } = useContext(Statecontext);
  const shop = props.details;

  useEffect(() => {
    axios
      .get(
        `https://wfanywhere.herokuapp.com/users/merchants/shop/review/${shopId}/`
      )
      .then((res) => {
        if (!res.data) {
          alert("backend issue");
        } else {
          setAllReviews(res.data);
        }
      });

    axios
      .get(
        `https://wfanywhere.herokuapp.com/users/profile-page/${
          jwt(userToken).user_id
        }/`,
        props.config
      )
      .then((res) => {
        if (!res.data) {
          alert("backend issue");
        } else {
          setUserData(res.data);
        }
      });
    setTriggerRender(true);
  }, [triggerRender]);
  // const allReviewDetails = [];
  // const editReview = () => {};
  // const deleteReview = () => {};
  // allReviews.map((each) => {
  //   return allReviewDetails.push(
  //     <div>
  //       <div>
  //         {each.name} {each.surname}
  //       </div>
  //       <div>Review: {each.review}</div>
  //       <div>Rating{each.rating}</div>
  //       {each.user_id === jwt(userToken).user_id && (
  //         <>
  //           <button onClick={editReview}>Edit</button>
  //           <button onClick={deleteReview}>Delete</button>
  //         </>
  //       )}
  //     </div>
  //   );
  // });

  return (
    <div>
      <h2>{shop.shop_name}</h2>
      <div>
        <img src={shop.image_url} alt="shop" />
      </div>
      <div>
        <h4>Description: {shop.description}</h4>
        <h4>No of sockets: {shop.no_of_sockets}</h4>
      </div>
      {/* <div>{allReviewDetails}</div> */}
      <DisplayReview
        key={uuidv4()}
        allReviews={allReviews}
        userToken={userToken}
        triggerRender={triggerRender}
        setTriggerRender={setTriggerRender}
      />
      <Review
        shopId={shopId}
        key={uuidv4()}
        userToken={userToken}
        name={userData.name}
        surname={userData.surname}
        triggerRender={triggerRender}
        setTriggerRender={setTriggerRender}
      />
    </div>
  );
};

export default ShopDetails;
