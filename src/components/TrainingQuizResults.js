import '../styles/header.scss';
import React from 'react'

function TrainingQuizResults({
  trainingCard,
  changeTrainingCardUIState,
  emptyArrayOfQuestionsForTraining,
  setActiveQuestionArrayIndex
}) {

  const endTrainingClickHandler = () => {
    // Убираем все вопросы и делаем изначальный пустой массив
    emptyArrayOfQuestionsForTraining();
    // Возвращаем индекс активного вопроса в начальное значение
    setActiveQuestionArrayIndex(0);
    changeTrainingCardUIState('mainMenu')
  }

  return (
    <React.Fragment>
      <h1>Тренировка завершена</h1>
      <h2>Поздравляем, вы успешно закрепили {trainingCard.questions.length - 1} вопросов </h2>
      <button className="training__start-btn" onClick={endTrainingClickHandler}>
        Закончить
      </button>
    </React.Fragment>
  );
}

export default TrainingQuizResults;