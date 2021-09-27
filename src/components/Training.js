import '../styles/header.scss';
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {ActionCreator as ActionCreatorTraining} from "../reducer/training/training.js";
import {getTrainingCard} from '../reducer/training/selectors.js';
import {getQuestions} from '../reducer/data/selectors.js';
import TrainingMainMenu from "./TrainingMainMenu"
import TrainingQuiz from "./TrainingQuiz"
import TrainingQuizResults from "./TrainingQuizResults"


function Training({
  trainingCard,
  changeTrainingCardUIState,
  changeTrainingCardQuestionAmount,
  setArrayOfQuestionsForTraining,
  emptyArrayOfQuestionsForTraining,
  setActiveQuestionArrayIndex,
  addTrainingCardQuestionType,
  removeTrainingCardQuestionType,
  questions
}) {
  return (
    <div className="training">
      {(() => {
        if (trainingCard.UIState === 'mainMenu') {
          return <TrainingMainMenu
            trainingCard={trainingCard}
            changeTrainingCardUIState={changeTrainingCardUIState}
            setArrayOfQuestionsForTraining={setArrayOfQuestionsForTraining}
            addTrainingCardQuestionType={addTrainingCardQuestionType}
            removeTrainingCardQuestionType={removeTrainingCardQuestionType}
            changeTrainingCardQuestionAmount={changeTrainingCardQuestionAmount}
            questions = {questions}
            />
        } else if (trainingCard.UIState === 'quiz') {
          return <TrainingQuiz
            trainingCard={trainingCard}
            changeTrainingCardUIState={changeTrainingCardUIState}
          />
        } else if (trainingCard.UIState === 'results') {
          return <TrainingQuizResults
            trainingCard={trainingCard}
            changeTrainingCardUIState={changeTrainingCardUIState}
            emptyArrayOfQuestionsForTraining={emptyArrayOfQuestionsForTraining}
            setActiveQuestionArrayIndex={setActiveQuestionArrayIndex}
          />
        }
      })()}
    </div>
  );
}

Training.propTypes = {
  trainingCard: PropTypes.shape({
    UIState: PropTypes.string.isRequired,
    settings: PropTypes.shape({
      questionTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
      questionAmount: PropTypes.number.isRequired,
    }),
    questions: PropTypes.array.isRequired,
    activeQuestionIndex: PropTypes.number.isRequired
  }),
  changeTrainingCardUIState: PropTypes.func.isRequired,
  changeTrainingCardQuestionAmount: PropTypes.func.isRequired,
  setArrayOfQuestionsForTraining: PropTypes.func.isRequired,
  emptyArrayOfQuestionsForTraining: PropTypes.func.isRequired,
  setActiveQuestionArrayIndex: PropTypes.func.isRequired,
  addTrainingCardQuestionType: PropTypes.func.isRequired,
  removeTrainingCardQuestionType: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object)

}

const mapStateToProps = (state) => {
  return {
    trainingCard: getTrainingCard(state),
    questions: getQuestions(state),
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeTrainingCardUIState: (state) => dispatch(ActionCreatorTraining.changeTrainingCardUIState(state)),
    addTrainingCardQuestionType: (state) => dispatch(ActionCreatorTraining.addTrainingCardQuestionType(state)),
    removeTrainingCardQuestionType: (state) => dispatch(ActionCreatorTraining.removeTrainingCardQuestionType(state)),
    setArrayOfQuestionsForTraining: (questions) => dispatch(ActionCreatorTraining.setArrayOfQuestionsForTraining(questions)),
    emptyArrayOfQuestionsForTraining: (index) => dispatch(ActionCreatorTraining.emptyArrayOfQuestionsForTraining(index)),
    setActiveQuestionArrayIndex: (index) => dispatch(ActionCreatorTraining.setActiveQuestionArrayIndex(index)),
    changeTrainingCardQuestionAmount: (index) => dispatch(ActionCreatorTraining.changeTrainingCardQuestionAmount(index)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Training);