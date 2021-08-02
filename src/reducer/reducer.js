import {reducer as reducerNotes} from "./notes/notes.js";
import {reducer as reducerSearch} from "./search/search.js";
import {reducer as reducerInterface} from "./interface/interface.js";
import NameSpace from "./name-space.js";
import {combineReducers} from "redux";

export default combineReducers({
  [NameSpace.NOTES]: reducerNotes,
  [NameSpace.SEARCH]: reducerSearch,
  [NameSpace.INTERFACE]: reducerInterface,
});
