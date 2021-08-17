import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  USER_LOADING,
  USER_LOADED,
  LOGOUT,
  SPINNER_LOADING,
  SPINNER_LOADED,
} from "../constants/actionTypes";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
export const loadUser = () => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  dispatch({
    type: USER_LOADING,
  });
  if (localStorage.token) setAuthToken(localStorage.token);
  try {
    const res = await axios.get("/api/auth/authcheck");
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
  dispatch({
    type: SPINNER_LOADED,
  });
};
export const login = (data) => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "/api/auth/login",
      data,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    if (res.data.token) setAuthToken(res.data.token);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
  dispatch({
    type: SPINNER_LOADED,
  });
};
export const register = (data) => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "/api/auth/register",
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
  dispatch({
    type: SPINNER_LOADED,
  });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
