import { useState } from "react";
import React from "react";
import axios from "axios";
import jwt from "jwt-decode";

const Review = ({
  shopId,
  userToken,
  name,
  surname,
  setTriggerRender,
  triggerRender,
}) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const reviewerData = {
    review: review,
    rating: rating,
    user_id: jwt(userToken).user_id,
    shop_id: shopId,
    name: name,
    surname: surname,
  };
  const handleSubmitReview = () => {
    axios
      .post(
        `http://127.0.0.1:8000/users/merchants/shop/review/${shopId}/`,
        reviewerData
      )
      .then((res) => {
        if (!res.data) {
          alert("backend issue");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setTriggerRender(!triggerRender);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={review}
          onChange={(event) => {
            setReview(event.target.value);
          }}
          placeholder="Review"
        />
        <input
          type="number"
          value={rating}
          onChange={(event) => {
            setRating(event.target.value);
          }}
          max="5"
          min="1"
          placeholder="Rating 1-5"
        />
      </form>
      <button onClick={handleSubmitReview}>Submit</button>
    </div>
  );
};

export default Review;
