import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //gives us local storage as default storage

import { combineReducers } from "redux";

const persistConfig = {
  key: "root", //store from the root
  storage,
  //an array containing string names of reducers we want to store
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer); //returns back a modified version of root reducer with persistconfig on top of it, so now has persist abilities.
