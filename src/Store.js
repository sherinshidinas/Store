import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

const reducers = combineReducers({
  pReducer: productListReducer,
});

const middleware = [thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
