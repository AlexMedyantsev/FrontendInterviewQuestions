import '../styles/index.scss'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Question from "./Question.js"
import {motion} from "framer-motion"

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

  let closeAllHandler = () => {
    changeCardState({isOpen: false, isAnswerShown: false})
  }

  return (
    <motion.div
      // animate={cardState.isOpen ? {width: '47%'} : {width: '30%'}}
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
        <div className="question__container question__container--question">
          <Question
            composition={question.questionComposition}
            string={null}
          />
        </div>
      }

      {/* Ответ */}
      {cardState.isAnswerShown &&
        <div className="question__container question__container--answer">
          <Question
            composition={question.answerComposition}
            string={'Ответ: '}
          />
        </div>
      }

      <div className="card__buttons-container">

        {/* Кнопка разворачивающая/сворачивающая ответ */}
        {cardState.isOpen &&
          <motion.button
            whileTap={{scale: 0.95}}
            whileHover={{scale: 1.05, backgroundColor: 'rgba(255,255,255,0.85)', transition: {duration: 0.2}}}
            onClick={() => rollOutAnswerHandler()}
            className={cardState.isAnswerShown ? 'card-button card-button--close' : 'card-button card-button--open'}
          >
            {cardState.isAnswerShown ? 'Скрыть ответ' : 'Показать ответ'}
          </motion.button>
        }

        {/* Кнопка сворачивания карточки */}
        {
          cardState.isOpen &&
          <motion.button
            whileTap={{scale: 0.95}}
            whileHover={{scale: 1.05, backgroundColor: 'rgba(255,255,255,0.85)', transition: {duration: 0.2}}}
            onClick={() => closeAllHandler()}
            className={cardState.isOpen ? 'card-button card-button--close' : 'card-button card-button--open'}
          >
            Свернуть карточку
          </motion.button>
        }
      </div>

    </motion.div>
  )
}

QuestionContainer.propTypes = {
  question: PropTypes.shape({
    questionTitle: PropTypes.string.isRequired,
    questionComposition: PropTypes.array.isRequired,
    answerComposition: PropTypes.array.isRequired,

  }),
  color: PropTypes.string.isRequired
}

export default QuestionContainer;