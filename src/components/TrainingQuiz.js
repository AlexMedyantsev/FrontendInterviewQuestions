import '../styles/header.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import QuestionContainer from "./QuestionContainer.js";
import {colors} from "../utils/const.js"

function TrainingQuiz({
  trainingCard,
  changeTrainingCardUIState,
}) {
  const [quizCardColor, setQuizCardColor] = useState('')
  const [activeTrainingQuestion, changeActiveTrainingQuestion] = useState(
    trainingCard.questions[0]
  )

  // Хук который раскрашивает карточку с вопросом основываясь на ее типе
  useEffect(() => {
    let activeQuestionIndex = trainingCard.activeQuestionIndex
    let activeQuestion = trainingCard.questions[activeQuestionIndex];

    if (trainingCard.questions.length > activeQuestionIndex) {
      if (activeQuestion.type === 'JS') {
        setQuizCardColor(colors.lightGreen)
      } else if (activeQuestion.type === 'HTML') {
        setQuizCardColor(colors.darkOrange)
      } else if (activeQuestion.type === 'CSS') {
        setQuizCardColor(colors.darkPurple)
      } else if (activeQuestion.type === 'React') {
        setQuizCardColor(colors.lightBlue)
      }
    }
  }, [trainingCard.activeQuestionIndex])

  useEffect(() => {
    // Меняем активный вопрос только если активный индекс не больше длины массива вопросов - 1
    if (trainingCard.questions.length - 1 >= trainingCard.activeQuestionIndex) {
      changeActiveTrainingQuestion(trainingCard.questions[trainingCard.activeQuestionIndex])
    }
    // Показываем экран с результатами если индекс вопроса больше длины массива вопросов - 1
    if (trainingCard.questions.length - 1 < trainingCard.activeQuestionIndex) {
      changeTrainingCardUIState('results')
    }
  }, [trainingCard.activeQuestionIndex]);

  return (
    <React.Fragment>
      <QuestionContainer
        question={activeTrainingQuestion}
        color={quizCardColor}
        width={'100%'}
        hasAnswerButtons={true}
        hasShowAnswerButton={true}
        hasCardStateButtons={false}
        hasQuestionCount={true}
      />
    </React.Fragment>
  );
}


export default TrainingQuiz;