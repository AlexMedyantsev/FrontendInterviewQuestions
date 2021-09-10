import '../styles/header.scss';
import {connect} from "react-redux"
import {ActionCreator as ActionCreatorUI} from "../reducer/ui/ui.js";
import {ActionCreator as ActionCreatorTraining} from "../reducer/training/training.js";
import TrainingMainMenu from "./TrainingMainMenu"
import TrainingSettings from "./TrainingSettings"
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