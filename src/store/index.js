import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authRegisterReducer, authLoginReducer } from './reducers/authReducers';

const reducer = combineReducers({
  authRegister: authRegisterReducer,
  authLogin: authLoginReducer,
});

const initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
