import {extend} from "../../utils/common.js";

export const initialState = {
  searchInput: '',
};

export const ActionType = {
  SET_SEARCH_INPUT: `SET_SEARCH_INPUT`,
}

export const ActionCreator = {
  setSearchInput: (input) => ({
    type: ActionType.SET_SEARCH_INPUT,
    payload: input,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_SEARCH_INPUT:
      return extend(state, {searchInput: action.payload});
    default:
      return state;
  }
};
