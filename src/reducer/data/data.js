import {extend} from "../../utils/common.js";
import {questions} from "../../utils/const.js";
import produce from 'immer';

export const initialState = {
  questions: questions,
};

export const ActionType = {
  CHANGE_QUESTION_SCORE: 'CHANGE_QUESTION_SCORE',
}

export const ActionCreator = {
  changeQuestionScore: ({question, valueToAdd}) => ({
    type: ActionType.CHANGE_QUESTION_SCORE,
    payload: {question, valueToAdd},
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_QUESTION_SCORE:
      return produce(state, draft => {
        draft.questions.find(q => q.questionTitle === action.payload.question.questionTitle).score += action.payload.valueToAdd;
      });

    default:
      return state;
  }
};