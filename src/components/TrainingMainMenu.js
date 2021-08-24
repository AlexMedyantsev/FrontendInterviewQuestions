import '../styles/header.scss';
import React, {useEffect} from 'react'

function TrainingMainMenu({
  trainingCard,
  changeTrainingCardUIState,
  arrayOfQuestionsForTraining,
  setArrayOfQuestionsForTraining,
  questions
}) {

  let generateArrayOfQuestionForTraining = (questions) => {
    let sortedByLanguageQuestions = questions.filter(q =>
      trainingCard.settings.questionTypes.includes(q.type))
    console.log(sortedByLanguageQuestions)
    setArrayOfQuestionsForTraining(sortedByLanguageQuestions)
    // Из отсортированных вопросов нужно получить желаемое количество 
    // вопросов для каждого типа 
    // sortedByLanguageQuestions.
  }

  let settingsClickHandler = () => {
    changeTrainingCardUIState('settings')
  }

  let startClickHandler = () => {
    generateArrayOfQuestionForTraining(questions);
  }

  useEffect(() => {
    if (arrayOfQuestionsForTraining.length > 0) {
      changeTrainingCardUIState('quiz');
    }
  }, [arrayOfQuestionsForTraining]);

  return (
    <React.Fragment>
      <div>
        <button
          className="training__settings-btn"
          onClick={settingsClickHandler}>
        </button>
        <h1>Главное меню</h1>
      </div>
      <button className="training__start-btn" onClick={startClickHandler}>
        Начать Тренировку
      </button>
    </React.Fragment >
  );
}

export default TrainingMainMenu;