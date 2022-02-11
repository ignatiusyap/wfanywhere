import React, { useState } from "react";
import jwt from "jwt-decode";
import axios from "axios";

const DisplayReview = ({
  allReviews,
  userToken,
  triggerRender,
  setTriggerRender,
  key,
}) => {
  const [updateReview, setUpdateReview] = useState("");
  const [updateRating, setUpdateRating] = useState("");
  const [allowEdit, setAllowEdit] = useState("");

  const submitReview = (reviewId) => {
    const updatedReview = { review: updateReview, rating: updateRating };

    axios
      .post(
        `http://127.0.0.1:8000/users/merchants/shop/editreview/${reviewId}/`,
        updatedReview
      )
      .then(() => {
        setAllowEdit("");
        setTriggerRender(!triggerRender);
      });
  };
  const deleteReview = (reviewId) => {
    const deleteReview = { is_active: "False" };
    axios
      .post(
        `http://127.0.0.1:8000/users/merchants/shop/deletereview/${reviewId}/`,
        deleteReview
      )
      .then(() => {});
    setTriggerRender(!triggerRender);
  };

  return (
    <>
      {allReviews?.map((each, index) => {
        return (
          <>
            {allowEdit !== index ? (
              <div>
                <div>
                  {each.name} {each.surname}
                </div>
                <div>Review: {each.review}</div>
                <div>Rating: {each.rating}</div>
                <div>
                  {each.user_id === jwt(userToken).user_id && (
                    <>
                      <button
                        id={index}
                        onClick={() => {
                          setAllowEdit(index);
                          setUpdateReview(each.review);
                          setUpdateRating(each.rating);
                        }}
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteReview(each.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <div>
                  {each.name} {each.surname}
                </div>
                <input
                  type="text"
                  value={updateReview}
                  onChange={(event) => {
                    setUpdateReview(event.target.value);
                  }}
                  placeholder={each.review}
                />
                <input
                  type="text"
                  value={updateRating}
                  onChange={(event) => {
                    setUpdateRating(event.target.value);
                  }}
                  placeholder={each.rating}
                />
                <div>
                  {each.user_id === jwt(userToken).user_id && (
                    <>
                      <button
                        id={index}
                        onClick={() => {
                          submitReview(each.id);
                        }}
                      >
                        Submit
                      </button>
                      <button
                        onClick={() => {
                          setAllowEdit("");
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default DisplayReview;
