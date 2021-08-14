import {extend} from "../../utils/common.js";
import produce from 'immer';

const trainingCard = {
  UIState: 'mainMenu',
  settings: {
    questionTypes: ['HTML', 'CSS', 'JS'],
    questionAmounts: 15,   
  },
  questions: [],
}

export const initialState = {
  activeQuestionSection: null,
  trainingCard: trainingCard
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
  changeTrainingCardUIState: (cardUIState) => ({
    type: ActionType.CHANGE_TRAINING_CARD_UI_STATE,
    payload: cardUIState,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_QUESTION_SECTION:
      return extend(state, {activeQuestionSection: action.payload});
    case ActionType.CHANGE_TRAINING_CARD_UI_STATE:
      return produce(state, draft => {
        draft.trainingCard.UIState = action.payload;
      });
    default:
      return state;
  }
};