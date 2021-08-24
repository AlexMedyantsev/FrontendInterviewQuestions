import '../styles/header.scss';
import {connect} from "react-redux"
import {ActionCreator as ActionCreatorUI} from "../reducer/ui/ui.js";
import TrainingMainMenu from "./TrainingMainMenu"
import TrainingSettings from "./TrainingSettings"
import TrainingQuiz from "./TrainingQuiz"
import TrainingQuizResults from "./TrainingQuizResults"


function Training({
  trainingCard,
  changeTrainingCardUIState,
  arrayOfQuestionsForTraining,
  setArrayOfQuestionsForTraining,
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
            questions={questions}
          />
        } else if (trainingCard.UIState === 'settings') {
          return <TrainingSettings
            trainingCard={trainingCard}
            changeTrainingCardUIState={changeTrainingCardUIState}
          />
        } else if (trainingCard.UIState === 'quiz') {
          return <TrainingQuiz
            trainingCard={trainingCard}
            changeTrainingCardUIState={changeTrainingCardUIState}
            arrayOfQuestionsForTraining={arrayOfQuestionsForTraining}
          />
        } else if (trainingCard.UIState === 'quizResults') {
          return <TrainingQuizResults
            trainingCard={trainingCard}

            changeTrainingCardUIState={changeTrainingCardUIState}
          />
        }
      })()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trainingCard: state.UI.trainingCard,
    questions: state.UI.questions,
    arrayOfQuestionsForTraining: state.UI.arrayOfQuestionsForTraining,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeTrainingCardUIState: (state) => dispatch(ActionCreatorUI.changeTrainingCardUIState(state)),
    setArrayOfQuestionsForTraining: (questions) => dispatch(ActionCreatorUI.setArrayOfQuestionsForTraining(questions))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Training);