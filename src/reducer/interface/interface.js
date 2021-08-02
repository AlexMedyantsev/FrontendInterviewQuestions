import {extend} from "../../utils/common.js";

export const initialState = {
  isSidebarOpen: false,
};

export const ActionType = {
  CHANGE_SIDEBAR_STATE: `CHANGE_SIDEBAR_STATE`,
}

export const ActionCreator = {
  changeSidebarState: () => ({
    type: ActionType.CHANGE_SIDEBAR_STATE,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SIDEBAR_STATE:
      return extend(state, {isSidebarOpen: !state.isSidebarOpen});
    default:
      return state;
  }
};
