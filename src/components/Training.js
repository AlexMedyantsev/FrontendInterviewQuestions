import '../styles/header.scss';
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {ActionCreator as ActionCreatorTraining} from "../reducer/training/training.js";
import TrainingMainMenu from "./TrainingMainMenu"
import TrainingQuiz from "./TrainingQuiz"
import TrainingQuizResults from "./TrainingQuizResults"


function Training({
  trainingCard,
  changeTrainingCardUIState,
  changeTrainingCardQuestonAmount,
  arrayOfQuestionsForTraining,
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
            arrayOfQuestionsForTraining={arrayOfQuestionsForTraining}
            setArrayOfQuestionsForTraining={setArrayOfQuestionsForTraining}
            addTrainingCardQuestionType={addTrainingCardQuestionType}
            removeTrainingCardQuestionType={removeTrainingCardQuestionType}
            changeTrainingCardQuestonAmount={changeTrainingCardQuestonAmount}
            questions = {questions}
            />
        } else if (trainingCard.UIState === 'quiz') {
          return <TrainingQuiz
            trainingCard={trainingCard}
            changeTrainingCardUIState={changeTrainingCardUIState}
            arrayOfQuestionsForTraining={arrayOfQuestionsForTraining}
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
  changeTrainingCardQuestonAmount: PropTypes.func.isRequired,
  arrayOfQuestionsForTraining: PropTypes.arrayOf(PropTypes.object).isRequired,
  setArrayOfQuestionsForTraining: PropTypes.func.isRequired,
  emptyArrayOfQuestionsForTraining: PropTypes.func.isRequired,
  setActiveQuestionArrayIndex: PropTypes.func.isRequired,
  addTrainingCardQuestionType: PropTypes.func.isRequired,
  removeTrainingCardQuestionType: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object)

}

const mapStateToProps = (state) => {
  return {
    trainingCard: state.TRAINING.trainingCard,
    questions: state.DATA.questions,
    arrayOfQuestionsForTraining: state.TRAINING.arrayOfQuestionsForTraining,
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
    changeTrainingCardQuestonAmount: (index) => dispatch(ActionCreatorTraining.changeTrainingCardQuestonAmount(index)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Training);