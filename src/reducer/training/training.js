import {extend} from "../../utils/common.js";
import {questions} from "../../utils/const.js";
import produce from 'immer';

const trainingCard = {
  UIState: 'mainMenu',
  settings: {
    questionTypes: ['HTML', 'JS'],
    questionAmounts: 15,
  },
  questions: [],
}

export const initialState = {
  trainingCard: trainingCard,
  questions: questions,
  arrayOfQuestionsForTraining: [],
};

export const ActionType = {
  CHANGE_TRAINING_CARD_UI_STATE: 'CHANGE_TRAINING_CARD_UI_STATE',
  CHANGE_TRAINING_CARD_SETTINGS_QUESTION_TYPES: 'CHANGE_TRAINING_CARD_SETTINGS_QUESTION_TYPES',
  CHANGE_TRAINING_CARD_SETTINGS_QUESTION_AMOUNT: 'CHANGE_TRAINING_CARD_SETTINGS_QUESTION_AMOUNT',
  SET_ARRAY_OF_QUESTIONS_FOR_TRAINING: 'SET_ARRAY_OF_QUESTIONS_FOR_TRAINING'
}

export const ActionCreator = {
  changeTrainingCardUIState: (cardUIState) => ({
    type: ActionType.CHANGE_TRAINING_CARD_UI_STATE,
    payload: cardUIState,
  }),
  setArrayOfQuestionsForTraining: (cardUIState) => ({
    type: ActionType.SET_ARRAY_OF_QUESTIONS_FOR_TRAINING,
    payload: cardUIState,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_TRAINING_CARD_UI_STATE:
      return produce(state, draft => {
        draft.trainingCard.UIState = action.payload;
      });

    case ActionType.CHANGE_TRAINING_CARD_SETTINGS_QUESTION_TYPES:
      return produce(state, draft => {
        draft.trainingCard.settings.questionTypes = action.payload;
      });

    case ActionType.CHANGE_TRAINING_CARD_SETTINGS_QUESTION_AMOUNT:
      return produce(state, draft => {
        draft.trainingCard.settings.questionAmount = action.payload;
      });

    case ActionType.SET_ARRAY_OF_QUESTIONS_FOR_TRAINING:
      return produce(state, draft => {
        draft.arrayOfQuestionsForTraining = action.payload;
      });

    default:
      return state;
  }
};