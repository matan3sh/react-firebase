import firebase from 'firebase/app';
import 'firebase/auth';
import db from 'db';
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

export const register =
  ({ email, password, username }) =>
  async (dispatch) => {
    try {
      dispatch({ type: AUTH_REGISTER_REQUEST });
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      const userProfile = {
        uid: user.uid,
        username,
        email,
        role: 'user',
      };

      await db.collection('profiles').doc(user.uid).set(userProfile);
      dispatch({ type: AUTH_REGISTER_SUCCESS });
    } catch (error) {
      dispatch({
        type: AUTH_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const resetRegister = () => async (dispatch) => {
  dispatch({ type: AUTH_REGISTER_RESET });
};

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: AUTH_LOGIN_REQUEST });
      await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch({ type: AUTH_LOGIN_SUCCESS });
    } catch (error) {
      dispatch({
        type: AUTH_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const setUser = () => async (dispatch) => {
  firebase.auth().onAuthStateChanged(async (authUser) => {
    dispatch({ type: AUTH_LOGIN_REQUEST });
    if (!authUser) dispatch({ type: AUTH_LOGOUT });
    else {
      const snapshot = await db.collection('profiles').doc(authUser?.uid).get();
      const profile = snapshot?.data();
      dispatch({
        type: AUTH_LOGIN_STATE,
        payload: { uid: profile?.uid, ...profile },
      });
    }
  });
};

export const logout = () => async (dispatch) => {
  await firebase.auth().signOut();
  dispatch({ type: AUTH_LOGOUT });
};
