import {extend} from "../../utils/common.js";
import produce from 'immer';

const trainingCard = {
  UIState: 'mainMenu',
  settings: {
    questionTypes: ['HTML', 'CSS', 'JS', 'React'],
    questionAmount: 15,
  },
  questions: [],
  activeQuestionIndex: 0,
}

export const initialState = {
  trainingCard: trainingCard,
  // questions: questions,
};

export const ActionType = {
  CHANGE_TRAINING_CARD_UI_STATE: 'CHANGE_TRAINING_CARD_UI_STATE',
  CHANGE_TRAINING_CARD_QUESTION_TYPES: 'CHANGE_TRAINING_CARD_QUESTION_TYPES',
  ADD_TRAINING_CARD_SETTINGS_QUESTION_TYPE: 'ADD_TRAINING_CARD_SETTINGS_QUESTION_TYPE',
  REMOVE_TRAINING_CARD_SETTINGS_QUESTION_TYPE: 'REMOVE_TRAINING_CARD_SETTINGS_QUESTION_TYPE',
  CHANGE_TRAINING_CARD_SETTINGS_QUESTION_AMOUNT: 'CHANGE_TRAINING_CARD_SETTINGS_QUESTION_AMOUNT',
  CHANGE_QUESTION_SCORE: 'CHANGE_QUESTION_SCORE',
  SET_ARRAY_OF_QUESTIONS_FOR_TRAINING: 'SET_ARRAY_OF_QUESTIONS_FOR_TRAINING',
  SET_ACTIVE_QUESTION_ARRAY_INDEX: 'SET_ACTIVE_QUESTION_ARRAY_INDEX',
  EMPTY_ARRAY_OF_QUESTIONS_FOR_TRAINING: 'EMPTY_ARRAY_OF_QUESTIONS_FOR_TRAINING'
}

export const ActionCreator = {
  changeTrainingCardUIState: (cardUIState) => ({
    type: ActionType.CHANGE_TRAINING_CARD_UI_STATE,
    payload: cardUIState,
  }),
  changeTrainingCardQuestonAmount: (amount) => ({
    type: ActionType.CHANGE_TRAINING_CARD_SETTINGS_QUESTION_AMOUNT,
    payload: amount,
  }),
  addTrainingCardQuestionType: (language) => ({
    type: ActionType.ADD_TRAINING_CARD_SETTINGS_QUESTION_TYPE,
    payload: language,
  }),
  removeTrainingCardQuestionType: (language) => ({
    type: ActionType.REMOVE_TRAINING_CARD_SETTINGS_QUESTION_TYPE,
    payload: language,
  }),
  setArrayOfQuestionsForTraining: (cardUIState) => ({
    type: ActionType.SET_ARRAY_OF_QUESTIONS_FOR_TRAINING,
    payload: cardUIState,
  }),
  setActiveQuestionArrayIndex: (cardUIState) => ({
    type: ActionType.SET_ACTIVE_QUESTION_ARRAY_INDEX,
    payload: cardUIState,
  }),
  emptyArrayOfQuestionsForTraining: () => ({
    type: ActionType.EMPTY_ARRAY_OF_QUESTIONS_FOR_TRAINING,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_TRAINING_CARD_UI_STATE:
      return produce(state, draft => {
        draft.trainingCard.UIState = action.payload;
      });

    case ActionType.CHANGE_TRAINING_CARD_QUESTION_TYPES:
      return produce(state, draft => {
        draft.trainingCard.settings.questionTypes = action.payload;
      });

    case ActionType.CHANGE_TRAINING_CARD_SETTINGS_QUESTION_AMOUNT:
      return produce(state, draft => {
        draft.trainingCard.settings.questionAmount = action.payload;
      });

    case ActionType.ADD_TRAINING_CARD_SETTINGS_QUESTION_TYPE:
      return produce(state, draft => {
        draft.trainingCard.settings.questionTypes = [...draft.trainingCard.settings.questionTypes, action.payload];
      });

    case ActionType.REMOVE_TRAINING_CARD_SETTINGS_QUESTION_TYPE:
      return produce(state, draft => {
        draft.trainingCard.settings.questionTypes = draft.trainingCard.settings.questionTypes.filter(el => el !== action.payload);
      });

    case ActionType.SET_ARRAY_OF_QUESTIONS_FOR_TRAINING:
      return produce(state, draft => {
        draft.trainingCard.questions = action.payload;
      });

    case ActionType.EMPTY_ARRAY_OF_QUESTIONS_FOR_TRAINING:
      return produce(state, draft => {
        draft.trainingCard.questions = [];
      });

    case ActionType.SET_ACTIVE_QUESTION_ARRAY_INDEX:
      return produce(state, draft => {
        draft.trainingCard.activeQuestionIndex = action.payload;
      });

    default:
      return state;
  }
};