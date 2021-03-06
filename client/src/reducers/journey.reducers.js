import {
  GET_JOURNEY,
  GET_FILTERED_JOURNEYS,
  JOURNEY_ERROR,
  CREATE_JOURNEY,
  GET_OWN_JOURNEY,
  CANCEL_JOURNEY,
} from "../constants/actionTypes";

const initialState = {
  journeys: [],
  journey: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FILTERED_JOURNEYS:
      return {
        ...state,
        journeys: payload,
        loading: false,
      };
    case GET_OWN_JOURNEY:
      return {
        ...state,
        journeys: payload,
        loading: false,
      };
    case CANCEL_JOURNEY:
      return {
        ...state,
        loading: false,
      };
    case CREATE_JOURNEY:
      return {
        ...state,
        journeys: [...state.journeys, payload],
        loading: false,
      };
    case GET_JOURNEY:
      return {
        ...state,
        journey: payload,
        loading: false,
      };
    case JOURNEY_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
