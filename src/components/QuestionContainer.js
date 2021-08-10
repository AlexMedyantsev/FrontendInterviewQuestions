import '../styles/index.scss';
import React, {useState} from 'react';
import Question from "./Question.js"

function QuestionContainer({question, color}) {
  const [cardState, changeCardState] = useState(
    {
      isAnswerShown: false,
      isOpen: false,
    }
  )

  let rollOutCardHandler = () => {
    changeCardState({...cardState, isOpen: !cardState.isOpen})
  }

  let rollOutAnswerHandler = () => {
    changeCardState({...cardState, isAnswerShown: !cardState.isAnswerShown})
  }


  return (
    <div
      className={cardState.isOpen ? "question" : "question question--rolled"}
      style={{backgroundColor: color}}
    >
      {/* Заголовок вопроса отобр. при свернутой карточке */}
      {
        !cardState.isOpen &&
        <span onClick={() => rollOutCardHandler()} className="question__rolled-text">{question.questionTitle}</span>
      }

      {/* Вопрос */}
      {cardState.isOpen &&
        <div className="question__container">
          <Question
            composition={question.questionComposition}
            string={null}
          />
        </div>
      }

      {/* Ответ */}
      {cardState.isAnswerShown &&
        <div className="question__container">
          <Question
            composition={question.answerComposition}
            string={'Ответ: '}
          />
        </div>
      }

      {/* Кнопка разворачивающая/сворачивающая ответ */}
      {cardState.isOpen &&
        <button
          onClick={() => rollOutAnswerHandler()}
          className={cardState.isAnswerShown ? 'card-button card-button--close' : 'card-button card-button--open'}
        >
          {cardState.isAnswerShown ? 'Скрыть ответ' : 'Показать ответ'}
        </button>
      }

      {/* Кнопка сворачивания карточки */}
      {
        cardState.isOpen &&
        <button
          onClick={() => rollOutCardHandler()}
          className={cardState.isOpen ? 'card-button card-button--close' : 'card-button card-button--open'}
        >
          Свернуть карточку
        </button>
      }

    </div>
  )
}

export default QuestionContainer;