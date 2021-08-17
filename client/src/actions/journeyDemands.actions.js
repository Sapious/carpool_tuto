import {
  JOURNEY_DEMANDS_ERROR,
  GET_OWN_JOURNEY_DEMANDS,
  SPINNER_LOADED,
  SPINNER_LOADING,
  CREATE_JOURNEY_DEMAND,
  CONFIRM_JOURNEY_DEMAND,
  CANCEL_JOURNEY_DEMAND,
} from "../constants/actionTypes";
import axios from "axios";

export const getOwnJourneyDemands = () => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  try {
    const res = await axios.get("/api/journey_demands/me");
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
export const createJourneyDemand = (data) => async (dispatch) => {
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
      "/api/journey_demands",
      data,
      config
    );
    dispatch({
      type: CREATE_JOURNEY_DEMAND,
      payload: res.data,
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

export const confirmDemand = (journeyDemandId) => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  try {
    const res = await axios.get(
      `/api/journey_demands/${journeyDemandId}/confirm`
    );
    dispatch({
      type: CONFIRM_JOURNEY_DEMAND,
      payload: res.data.journeyDemand,
    });
  } catch (err) {}
  dispatch({
    type: SPINNER_LOADED,
  });
};
export const cancelDemand = (journeyDemandId) => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  const res = await axios.get(
    `/api/journey_demands/${journeyDemandId}/cancel`
  );
  dispatch({
    type: CANCEL_JOURNEY_DEMAND,
    payload: res.data.journeyDemand,
  });
  dispatch({
    type: SPINNER_LOADED,
  });
};
