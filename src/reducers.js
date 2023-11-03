import { combineReducers } from "redux";
import locationReducer from "./redux/locationReducer";

const rootReducer = combineReducers({
  location: locationReducer,
});

export default rootReducer;
