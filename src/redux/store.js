import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [];

//we can check if we are in the development environment or not. dont want logger if were in production
//when we call build this is then skipped
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };

//reducer resets when browser refreshes, firebase doesnt reset as this gives session persistance.
//need to use local storage with this other state.
//we could store the items in the checkout on firebase.
//we can just store it on the front end in local storage to persist a refresh.
//redux-persist library does this
//sessionstorage persists during the session but is lost when closing
//localstorage persists until we clear it even if closing the browser
//stores using key value pairs, can only store strings.
//using JSON.stringify usually
//JSON.parse to turn it back to json
