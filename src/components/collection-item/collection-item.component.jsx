import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButtom from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span classname="name">{name}</span>
        <span classname="price">{price}</span>
      </div>
      <CustomButtom
        onClick={() => addItem(item)}
        className="custom-button"
        inverted={true}
      >
        Add to cart
      </CustomButtom>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
