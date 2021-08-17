import {
  GET_OWN_JOURNEY_DEMANDS,
  JOURNEY_DEMANDS_ERROR,
  CREATE_JOURNEY_DEMAND,
  CONFIRM_JOURNEY_DEMAND,
  CANCEL_JOURNEY_DEMAND,
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
    case CREATE_JOURNEY_DEMAND:
      return {
        ...state,
        journeyDemand: payload,
        loading: false,
      };
    case CONFIRM_JOURNEY_DEMAND:
      return {
        ...state,
        journeyDemand: payload,
        loading: false,
      };
    case CANCEL_JOURNEY_DEMAND:
      return {
        ...state,
        journeyDemand: payload,
        loading: false,
      };
    default:
      return state;
  }
}
