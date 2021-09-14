import '../styles/header.scss';
import PropTypes from 'prop-types';
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

TrainingQuizResults.propTypes = {
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
  emptyArrayOfQuestionsForTraining: PropTypes.func.isRequired,
  setActiveQuestionArrayIndex: PropTypes.func.isRequired,
}

export default TrainingQuizResults;