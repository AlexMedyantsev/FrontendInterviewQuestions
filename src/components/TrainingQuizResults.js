import '../styles/header.scss';
import React from 'react'
import Button from './Button.js'

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
      <h2>Поздравляем, вы успешно изучили  вопросов ({trainingCard.questions.length}) </h2>
      <Button
        callback={endTrainingClickHandler}
        text={'Завершить тренировку'}
      />
    </React.Fragment>
  );
}

export default TrainingQuizResults;