//a reducer is just a function that gets 2 properties, the last state or initial state, and an action. action has a type such as "add user" and payload with a users id

import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};
//can use = initial state as a default parameter incase state is not set when the function is called. remember null is still a value
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
