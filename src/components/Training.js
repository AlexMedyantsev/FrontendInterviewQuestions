import '../styles/header.scss';
import TrainingMainMenu from "./TrainingMainMenu"
import TrainingSettings from "./TrainingSettings"
import TrainingQuiz from "./TrainingQuiz"
import TrainingQuizResults from "./TrainingQuizResults"


function Training({trainingCard, changeTrainingCardUIState}) {

  let generateArrayOfQuestionForTraining = () => {

  }

  return (
    <div className="training">
      {(() => {
        if (trainingCard.UIState === 'mainMenu') {
          return <TrainingMainMenu
            trainingCard={trainingCard}
            changeTrainingCardUIState={changeTrainingCardUIState}
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

export default Training;