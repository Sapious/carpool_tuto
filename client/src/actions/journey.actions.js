import {
  GET_JOURNEY,
  GET_FILTERED_JOURNEYS,
  JOURNEY_ERROR,
} from "../constants/actionTypes";
import axios from "axios";

export const getFilteredJourneys = (queries) => async (dispatch) => {
  let queryString = "";
  for (const key in queries) {
    queryString += `${key}=${queries[key]}&`;
  }
  try {
    const res = await axios.get(
      `http://localhost:8000/journeys?${queryString}`
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
};
