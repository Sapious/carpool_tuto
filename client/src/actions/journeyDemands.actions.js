import {
  JOURNEY_DEMANDS_ERROR,
  GET_OWN_JOURNEY_DEMANDS,
  SPINNER_LOADED,
  SPINNER_LOADING,
} from "../constants/actionTypes";
import axios from "axios";

export const getOwnJourneyDemands = () => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  try {
    const res = await axios.get("http://localhost:8000/journey_demands/me");
    dispatch({
      type: GET_OWN_JOURNEY_DEMANDS,
      payload: res.data.journeyDemands,
    });
  } catch (err) {
    dispatch({
      type: JOURNEY_DEMANDS_ERROR,
      payload: err,
    });
  }
  dispatch({
    type: SPINNER_LOADED,
  });
};
