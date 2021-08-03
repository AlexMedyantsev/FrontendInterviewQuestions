import {extend} from "../../utils/common.js";

export const initialState = {
  activeQuestionSection: null,
};

export const ActionType = {
  CHANGE_ACTIVE_QUESTION_SECTION: 'CHANGE_ACTIVE_QUESTION_SECTION',
}

export const ActionCreator = {
  changeActiveQuestionSection: (activeSection) => ({
    type: ActionType.CHANGE_ACTIVE_QUESTION_SECTION,
    payload: activeSection,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_QUESTION_SECTION:
      return extend(state, {activeQuestionSection: action.payload});
    default:
      return state;
  }
};
