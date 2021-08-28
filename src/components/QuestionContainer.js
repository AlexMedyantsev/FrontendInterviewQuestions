import '../styles/index.scss'
import React, {useState} from 'react'
import {connect} from "react-redux"
import {ActionCreator as ActionCreatorTraining} from "../reducer/training/training.js"
import PropTypes from 'prop-types'
import Question from "./Question.js"
import {motion} from "framer-motion"
import styled from 'styled-components';

const Div = styled(motion.div)`
width: ${props => props.width};
@media (max-width: 768px) {
  min-width: 100%;
}
`;

function QuestionContainer({
  question,
  color,
  width,
  hasAnswerButtons,
  hasCardStateButtons,
  setActiveQuestionArrayIndex,
  trainingCard
}) {

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

  let rightAnswerClickHandler = () => {
    let newIndex = trainingCard.activeQuestionIndex + 1;
    setActiveQuestionArrayIndex(newIndex)
  }

  let wrongAnswerClickHandler = () => {
    let newIndex = trainingCard.activeQuestionIndex + 1;
    setActiveQuestionArrayIndex(newIndex)
  }

  return (
    <Div
      width={width}
      // animate={cardState.isOpen ? {width: '47%'} : {width: '30%'}}
      className={cardState.isOpen ? "question" : "question question--rolled"}
      style={{backgroundColor: color}}
    >

      {/* Вопрос */}
      {
        <div className="question__container question__container--question">
          <Question
            composition={question.questionComposition}
            className={'question__title'}
            string={null}
          />
        </div>
      }

      {/* Ответ */}
      {cardState.isAnswerShown &&
        <div className="question__container question__container--answer">
          <Question
            composition={question.answerComposition}
            className={'question__text'}
            string={'Ответ: '}
          />
        </div>
      }

      <div className="card__buttons-container">

        {/* Кнопка разворачивающая/сворачивающая ответ */}
        {!cardState.isAnswerShown &&
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
          cardState.isAnswerShown && hasCardStateButtons &&
          <motion.button
            whileTap={{scale: 0.95}}
            whileHover={{scale: 1.05, backgroundColor: 'rgba(255,255,255,0.85)', transition: {duration: 0.2}}}
            onClick={() => closeAllHandler()}
            className={cardState.isOpen ? 'card-button card-button--close' : 'card-button card-button--open'}
          >
            Свернуть карточку
          </motion.button>
        }

        {/* Кнопка для подтверждения правильного Ответа  */}
        {
          cardState.isAnswerShown && hasAnswerButtons &&
          <motion.button
            whileTap={{scale: 0.95}}
            whileHover={{scale: 1.05, backgroundColor: 'rgba(255,255,255,0.85)', transition: {duration: 0.2}}}
            onClick={() => rightAnswerClickHandler()}
            className={cardState.isOpen ? 'card-button card-button--right card-button--close' : 'card-button card-button--right card-button--open'}
          >
            Я это знаю
          </motion.button>
        }

        {/* Кнопка для подтверждения повторения вопроса  */}
        {
          cardState.isAnswerShown && hasAnswerButtons &&
          <motion.button
            whileTap={{scale: 0.95}}
            whileHover={{scale: 1.05, backgroundColor: 'rgba(255,255,255,0.85)', transition: {duration: 0.2}}}
            onClick={() => wrongAnswerClickHandler()}
            className={cardState.isOpen ? 'card-button card-button--wrong card-button--close' : 'card-button card-button--wrong card-button--open'}
          >
            Нужно повторить
          </motion.button>
        }
      </div>

    </Div>
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

const mapStateToProps = (state) => {
  return {
    trainingCard: state.TRAINING.trainingCard,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeTrainingCardUIState: (state) => dispatch(ActionCreatorTraining.changeTrainingCardUIState(state)),
    setArrayOfQuestionsForTraining: (questions) => dispatch(ActionCreatorTraining.setArrayOfQuestionsForTraining(questions)),
    setActiveQuestionArrayIndex: (index) => dispatch(ActionCreatorTraining.setActiveQuestionArrayIndex(index))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
