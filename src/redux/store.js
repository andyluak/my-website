import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();

// Add logger only in development mode
const middleware = process.env.NODE_ENV === "development" ? [thunk, logger] : [thunk];

const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(...middleware)) );

 export default store;