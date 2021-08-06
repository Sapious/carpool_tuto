import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  USER_LOADING,
  USER_LOADED,
  LOGOUT,
} from "../constants/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: payload,
      };
    default:
      return state;
  }
}
