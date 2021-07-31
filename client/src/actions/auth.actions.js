import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  USER_LOADING,
  USER_LOADED,
  LOGOUT,
} from "../constants/actionTypes";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
export const loadUser = () => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    const res = await axios.get("http://localhost:8000/auth/authcheck");
    dispatch({
      type: USER_LOADED,
      payload: res.data.user,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};
export const login = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:8000/auth/login",
      data,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};
export const register = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:8000/auth/register",
      data,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
