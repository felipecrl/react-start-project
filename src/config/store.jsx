import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "reducers/root-reducer";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(ReduxThunk, logger))
  );
}
