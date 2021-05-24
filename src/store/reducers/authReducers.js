import {
  AUTH_LOGIN_FAIL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_STATE,
  AUTH_LOGOUT,
  AUTH_REGISTER_FAIL,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_RESET,
} from 'store/types/authTypes';

export const authRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_REGISTER_REQUEST:
      return { ...state, loading: true };
    case AUTH_REGISTER_SUCCESS:
      return { loading: false, success: true };
    case AUTH_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case AUTH_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const authLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state, loading: true };
    case AUTH_LOGIN_SUCCESS:
      return { loading: false, isAuth: true };
    case AUTH_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case AUTH_LOGIN_STATE:
      return { loading: false, userAuth: action.payload, isAuth: true };
    case AUTH_LOGOUT:
      return { loading: false, userAuth: {}, isAuth: false };
    default:
      return state;
  }
};
