import { CreateStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = CreateStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);
