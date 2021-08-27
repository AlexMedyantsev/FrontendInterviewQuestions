import {reducer as reducerUI} from "./ui/ui.js";
import {reducer as reducerTraining} from "./training/training.js";
import NameSpace from "./name-space.js";
import {combineReducers} from "redux";

export default combineReducers({
  [NameSpace.UI]: reducerUI,
  [NameSpace.TRAINING]: reducerTraining,
});
