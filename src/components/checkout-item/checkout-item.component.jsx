import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"></img>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    {/* https://www.w3schools.com/charsets/ref_utf_dingbats.asp DINGBATS!! */}
    <div className="remove-button">&#10005</div>
  </div>
);

export default CheckoutItem;
