import React from "react";
import jwt from "jwt-decode";

const DisplayReview = ({ allReviews, userToken }) => {
  const allReviewDetails = [];
  const editReview = () => {};
  const deleteReview = () => {};
  allReviews.map((each) => {
    return allReviewDetails.push(
      <div>
        <div>
          {each.name} {each.surname}
        </div>
        <div>Review: {each.review}</div>
        <div>Rating{each.rating}</div>
        {each.user_id === jwt(userToken).user_id && (
          <>
            <button onClick={editReview}>Edit</button>
            <button onClick={deleteReview}>Delete</button>
          </>
        )}
      </div>
    );
  });
  return <div>{allReviewDetails}</div>;
};

export default DisplayReview;
