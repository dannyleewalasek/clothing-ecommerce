import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";

import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>
      {console.log(currentUser)}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon></CartIcon>
      {hidden ? null : <CartDropDown></CartDropDown>}
    </div>
  </div>
);

//destructuring nested, want the current value off the user which is off the styate
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
