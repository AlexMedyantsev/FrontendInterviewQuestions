import {extend} from "../../utils/common.js";
import {questions} from "../../utils/const.js";
import produce from 'immer';

export const initialState = {
  activeQuestionSection: {
    name: null,
    color: null,
  },
  questions: questions,
};

export const ActionType = {
  CHANGE_ACTIVE_QUESTION_SECTION: 'CHANGE_ACTIVE_QUESTION_SECTION',
  CHANGE_TRAINING_CARD_UI_STATE: 'CHANGE_TRAINING_CARD_UI_STATE',
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