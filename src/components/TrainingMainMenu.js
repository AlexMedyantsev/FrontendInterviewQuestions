import '../styles/header.scss';
import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import Button from './Button';
import TrainingSettings from "./TrainingSettings.js"
import {shuffle} from "../utils/common.js"

function TrainingMainMenu({
  trainingCard,
  changeTrainingCardUIState,
  changeTrainingCardQuestionAmount,
  setArrayOfQuestionsForTraining,
  addTrainingCardQuestionType,
  removeTrainingCardQuestionType,
  questions
}) {

  const generateArrayOfQuestionForTraining = (questions) => {
    const finalArray = [];
    const maxQuestionAmount = trainingCard.settings.questionAmount

    // Фильтруем вопросы по типу языков программирования, которые указаны в настройках
    const sortedByLanguageQuestions = questions.filter(q =>
      trainingCard.settings.questionTypes.includes(q.type))

    // Перемешиваем их
    const ShuffledSortedByLanguageQuestions = shuffle(sortedByLanguageQuestions)

    // Получаем вопросы основываясь на score
    const questionsWithNegativeScore = ShuffledSortedByLanguageQuestions.filter(q => q.score < 0)
    const questionsWithNeutralScore = ShuffledSortedByLanguageQuestions.filter(q => q.score === 0)
    const questionsWithPositiveScore = ShuffledSortedByLanguageQuestions.filter(q => q.score > 0)

    // Если есть вопросы по какой-то из категорий score пушим их в finalArray
    questionsWithNegativeScore.length > 0 ? finalArray.push(...questionsWithNegativeScore) : ''
    questionsWithNeutralScore.length > 0 ? finalArray.push(...questionsWithNeutralScore) : ''
    questionsWithPositiveScore.length > 0 ? finalArray.push(...questionsWithPositiveScore) : ''

    // В конце дулаем splice и получаем ровно столько вопросов сколько указано в настройках
    // Из-за порядка в котором вопросы добавляются в массив - приоритет следующий:
    // Сначала идут вопросы с негативным скором, затем с нулевым, а после с положительным
    const splicedFinalArray = finalArray.splice(0, maxQuestionAmount)

    return splicedFinalArray
  }

  const startClickHandler = () => {
    const arrayOfQuestions = generateArrayOfQuestionForTraining(questions)
    setArrayOfQuestionsForTraining(arrayOfQuestions)
  }

  useEffect(() => {
    if (trainingCard.questions.length > 0) {
      changeTrainingCardUIState('quiz')
    }
  }, [JSON.stringify(trainingCard.questions)])

  return (
    <React.Fragment>
      <TrainingSettings
        trainingCard={trainingCard}
        changeTrainingCardUIState={changeTrainingCardUIState}
        addCallback={addTrainingCardQuestionType}
        removeCallback={removeTrainingCardQuestionType}
        changeTrainingCardQuestionAmount={changeTrainingCardQuestionAmount}
      />
      <Button
        callback={startClickHandler}
        text={'Начать тренировку'}
      />
    </React.Fragment >
  );
}

TrainingMainMenu.propTypes = {
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
  addTrainingCardQuestionType: PropTypes.func.isRequired,
  removeTrainingCardQuestionType: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object),
}

export default TrainingMainMenu