import '../styles/header.scss';
import React, {useEffect} from 'react'
import Button from './Button';
import TrainingSettings from "./TrainingSettings.js"

function TrainingMainMenu({
  trainingCard,
  changeTrainingCardUIState,
  changeTrainingCardQuestonAmount,
  setArrayOfQuestionsForTraining,
  addTrainingCardQuestionType,
  removeTrainingCardQuestionType,
  questions
}) {

  let generateArrayOfQuestionForTraining = (questions) => {
    let finalArray = [];
    let maxQuestionAmount = trainingCard.settings.questionAmount

    // Фильтруем вопросы по типу языков программирования, которые указаны в настройках
    let sortedByLanguageQuestions = questions.filter(q =>
      trainingCard.settings.questionTypes.includes(q.type))

    // Получаем вопросы основываясь на score
    sortedByLanguageQuestions.map(q => console.log(q.score))
    let questionsWithNegativeScore = sortedByLanguageQuestions.filter(q => q.score < 0)
    let questionsWithNeutralScore = sortedByLanguageQuestions.filter(q => q.score === 0)
    let questionsWithPositiveScore = sortedByLanguageQuestions.filter(q => q.score > 0)

    // Если есть вопросы по какой-то из категорий score пушим их в finalArray
    questionsWithNegativeScore.length > 0 ? finalArray.push(...questionsWithNegativeScore) : ''
    questionsWithNeutralScore.length > 0 ? finalArray.push(...questionsWithNeutralScore) : ''
    questionsWithPositiveScore.length > 0 ? finalArray.push(...questionsWithPositiveScore) : ''

    // В конце дулаем splice и получаем ровно столько вопросов сколько указано в настройках
    // Из-за порядка в котором вопросы добавляются в массив - приоритет следующий:
    // Сначала идут вопросы с негативным скором, затем с нулевым, а после с положительным
    let splicedFinalArray = finalArray.splice(0, maxQuestionAmount)

    return splicedFinalArray
  }

  let startClickHandler = () => {
    let arrayOfQuestions = generateArrayOfQuestionForTraining(questions)
    setArrayOfQuestionsForTraining(arrayOfQuestions)
  }

  useEffect(() => {
    if (trainingCard.questions.length > 0) {
      changeTrainingCardUIState('quiz')
    }
  }, [JSON.stringify(trainingCard.questions)])

  return (
    <React.Fragment>
      {/* <div>
        <h1>Главное меню</h1>
      </div> */}
      <TrainingSettings
        trainingCard={trainingCard}
        changeTrainingCardUIState={changeTrainingCardUIState}
        addCallback={addTrainingCardQuestionType}
        removeCallback={removeTrainingCardQuestionType}
        changeTrainingCardQuestonAmount={changeTrainingCardQuestonAmount}
      />
      <Button
        callback={startClickHandler}
        text={'Начать тренировку'}
      />
    </React.Fragment >
  );
}

export default TrainingMainMenu