import {
  GET_OWN_JOURNEY_DEMANDS,
  JOURNEY_DEMANDS_ERROR,
} from "../constants/actionTypes";

const initialState = {
  journeyDemands: [],
  journeyDemand: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_OWN_JOURNEY_DEMANDS:
      return {
        ...state,
        journeyDemands: payload,
        loading: false,
      };
    case JOURNEY_DEMANDS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
