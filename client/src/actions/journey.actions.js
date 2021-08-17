import {
  GET_JOURNEY,
  GET_OWN_JOURNEY,
  CREATE_JOURNEY,
  GET_FILTERED_JOURNEYS,
  JOURNEY_ERROR,
  SPINNER_LOADED,
  SPINNER_LOADING,
  CANCEL_JOURNEY,
} from "../constants/actionTypes";
import axios from "axios";

export const getFilteredJourneys = (queries) => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  let queryString = "";
  for (const key in queries) {
    queryString += `${key}=${queries[key]}&`;
  }
  try {
    const res = await axios.get(
      `/api/journeys?${queryString}`
    );
    dispatch({
      type: GET_FILTERED_JOURNEYS,
      payload: res.data.journeys,
    });
  } catch (err) {
    dispatch({
      type: JOURNEY_ERROR,
      payload: err,
    });
  }
  dispatch({
    type: SPINNER_LOADED,
  });
};

export const createJourney = (data) => async (dispatch) => {
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
      "/api/journeys",
      data,
      config
    );
    dispatch({
      type: CREATE_JOURNEY,
      payload: res.data.journey,
    });
  } catch (err) {
    dispatch({
      type: JOURNEY_ERROR,
      payload: err,
    });
  }
  dispatch({
    type: SPINNER_LOADED,
  });
};
export const getOwnJourneys = () => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  try {
    const res = await axios.get("/api/journeys/me");
    dispatch({
      type: GET_OWN_JOURNEY,
      payload: res.data.journeys,
    });
  } catch (err) {
    dispatch({
      type: JOURNEY_ERROR,
      payload: err,
    });
  }
  dispatch({
    type: SPINNER_LOADED,
  });
};

export const cancelJourney = (journeyId) => async (dispatch) => {
  dispatch({
    type: SPINNER_LOADING,
  });
  try {
    const res = await axios.get(
      `/api/journeys/${journeyId}/cancel`
    );
    dispatch({
      type: CANCEL_JOURNEY,
      payload: res.data.journey,
    });
  } catch (err) {
    dispatch({
      type: JOURNEY_ERROR,
      payload: err,
    });
  }
  dispatch({
    type: SPINNER_LOADED,
  });
};
