import '../styles/header.scss';
import "../styles/global/variables.scss"
import React, {useState, useEffect} from 'react';
import QuestionContainer from "./QuestionContainer.js";

function TrainingQuiz({
  trainingCard,
  changeTrainingCardUIState,
}) {
  const [activeTrainingQuestion, changeActiveTrainingQuestion] = useState(
    trainingCard.questions[0]
  )

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
        color={'red'}
        width={'100%'}
        hasAnswerButtons={true}
        hasCardStateButtons={false}
      />
    </React.Fragment>
  );
}

export default TrainingQuiz;