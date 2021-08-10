import '../styles/index.scss';
import React, {useState} from 'react';
import Question from "./Question.js"

function QuestionContainer({question, color}) {
  const [cardState, changeCardState] = useState({
    isOpen: false,
  })

  let rollOutCardHandler = () => {
    changeCardState({isOpen: !cardState.isOpen})
  }

  return (
    <div
      className={cardState.isOpen ? "question" : "question question--rolled"}
      style={{backgroundColor: color}}
    >
      {
        !cardState.isOpen &&
        <span onClick={() => rollOutCardHandler()} className="question__rolled-text">{question.questionTitle}</span>
      }

      {/* Вопрос */}
      {cardState.isOpen &&
        <React.Fragment>
          <div className="question__container">
            <Question
              composition={question.questionComposition}
            />
          </div>

          <div className="question__container">
            <Question
              composition={question.answerComposition}
            />
          </div>
        </React.Fragment>
      }
      {
        cardState.isOpen &&
        <button
          onClick={() => rollOutCardHandler()}
          className={cardState.isOpen ? 'card-button card-button--close' : 'card-button card-button--open'}
        ></button>
      }

    </div>
  )
}

export default QuestionContainer;