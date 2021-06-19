import { createSelector } from "reselect";

//two types of selectors, first is inputselector, second is output select which uses createselector.

//input selector: a fucntion that gets the whol state and just returns a slice of it

const selectCart = (state) => state.cart;

//outputselector
//because we use createselector, its a memoize selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//gives us total quantity
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

//WITHOUT DOING THIS STUFF,WHEN STATE CHANGES AT TOP, ALL COMPONENTS LISTENING TO ANY PART OF THE STATE ARE UPDATED EVEN IF THE DATA THEY NEED IS NOT UPDATED.
//redux is creating a new object everytime any part of the state is changing, so someone listening to items, will get updated when user changes as the whole state is techincally a new objkect
//using redux we are skipping having to put data through lots of nested components, but this makes the above problem with the way reducers are made, so to fix this we use memoization techniques/selectors

//EXTENSIBLE CODE!
//extensible code is reusable! we dont have to keep rewriting the same thing, DRY principles, makes it easy to understand and add features
//code for the future
