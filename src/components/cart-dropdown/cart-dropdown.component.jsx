import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

//rerender when state changes
const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}>
            {" "}
          </CartItem>
        ))
      ) : (
        <span>Cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("./checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

//happens every time the state changes
const mapStateToProps = createStructuredSelector({
  //makes sure cart dropdown doesnt get rerendered when state changhes that isnt related to the items.
  cartItems: selectCartItems,
});

//if we dont give mapdispatchtoprops as second VREyeParameters, connect passes this as a prop into the component, this makes it simpler sometimes if the mapdispatch would of only been really simple
//get our connected component, then pass to withrouter which gives us acces to the history prop.
export default withRouter(connect(mapStateToProps)(CartDropDown));
