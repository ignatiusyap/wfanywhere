import React from "react";
import jwt from "jwt-decode";
import axios from "axios";

const DisplayReview = ({ allReviews, userToken }) => {
  const editReview = (reviewId) => {
    axios
      .post(
        `http://127.0.0.1:8000/users/merchants/shop/editreview/${reviewId}/`
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  const deleteReview = () => {};

  return (
    <>
      {allReviews !== [] &&
        allReviews.map((each) => {
          return (
            <div>
              <div>
                {each.name} {each.surname}
              </div>
              <div>Review: {each.review}</div>
              <div>Rating{each.rating}</div>
              {each.user_id === jwt(userToken).user_id && (
                <>
                  <button onClick={() => editReview(each.id)}>Edit</button>
                  <button onClick={() => deleteReview}>Delete</button>
                </>
              )}
            </div>
          );
        })}
    </>
  );
};

export default DisplayReview;
