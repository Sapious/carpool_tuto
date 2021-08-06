import { combineReducers } from "redux";
import auth from "./auth.reducers";
import journey from "./journey.reducers";
import spinner from "./spinner.reducers";
import journeyDemand from "./journeyDemands.reducers";
export default combineReducers({
  authState: auth,
  journeyState: journey,
  spinnerState: spinner,
  journeyDemandState: journeyDemand,
});
