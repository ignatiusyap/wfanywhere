import React from "react";

const ShopDetails = (props) => {
  const shop = props.details;
  return (
    <>
      <div>{shop.shop_name}</div>
    </>
  );
};

export default ShopDetails;
