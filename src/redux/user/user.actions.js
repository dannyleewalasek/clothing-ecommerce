import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  //snake case for consts variables
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
