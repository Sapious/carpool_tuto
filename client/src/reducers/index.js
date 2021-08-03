import { combineReducers } from "redux";
import auth from "./auth.reducers";
import journey from "./journey.reducers";
export default combineReducers({
  authState: auth,
  journeyState: journey,
});
