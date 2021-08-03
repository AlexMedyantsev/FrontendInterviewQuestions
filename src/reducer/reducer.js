import {reducer as reducerUI} from "./ui/ui.js";
import NameSpace from "./name-space.js";
import {combineReducers} from "redux";

export default combineReducers({
  [NameSpace.UI]: reducerUI,
});
