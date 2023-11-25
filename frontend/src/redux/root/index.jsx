import { combineReducers } from "redux";
import sideMenuReducer from "../reducers/sideMenuReducer";
import contentReducer from "../reducers/contentReducer";

const rootReducer = combineReducers({
  side: sideMenuReducer,
  content: contentReducer,  
});

export default rootReducer;
