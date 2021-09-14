import '../styles/index.scss'
import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {ActionCreator as ActionCreatorTraining} from "../reducer/training/training.js"
import {ActionCreator as ActionCreatorData} from "../reducer/data/data.js"
import PropTypes from 'prop-types'
import Question from "./Question.js"
import {motion} from "framer-motion"
import styled from 'styled-components';

const Div = styled(motion.div)`
width: ${props => props.width};
display: flex;
flex-direction:column;
@media (max-width: 768px) {
  min-width: 100%;
}
@media (min-width: 768px) and (max-width: 1124px) {
  min-width: 100%;
}
`;

function QuestionContainer({
  question,
  questions,
  color,
  width,
  hasAnswerButtons,
  hasCardStateButtons,
  hasShowAnswerButton,
  hasQuestionCount,
  setActiveQuestionArrayIndex,
  changeQuestionScore,
  trainingCard
}) {

  const [trigger, activateTrigger] = useState(trainingCard.activeQuestionIndex)
  const [isFirstRender, changeIsFirstRender] = useState(true)
  const [cardState, changeCardState] = useState(
    {
      isAnswerShown: false,
      isOpen: false,
      isHovered: false,
    }
  )

  const rollOutAnswerHandler = () => {
    changeCardState({...cardState, isAnswerShown: !cardState.isAnswerShown})
  }

  const closeAllHandler = () => {
    changeCardState({isOpen: false, isAnswerShown: false})
  }

  const rightAnswerClickHandler = () => {
    changeQuestionScore({question: question, valueToAdd: 1})
    activateTrigger(trigger + 1)
    changeCardState({...cardState, isAnswerShown: !cardState.isAnswerShown})
    window.scrollTo(0, 0)
  }


  const wrongAnswerClickHandler = () => {
    changeQuestionScore({question: question, valueToAdd: -1})
    activateTrigger(trigger + 1)
    changeCardState({...cardState, isAnswerShown: !cardState.isAnswerShown})
    window.scrollTo(0, 0)
  }

  const cardHoverOverHandler = () => {
    changeCardState({...cardState, isHovered: true})
  }

  const cardHoverOutHandler = () => {
    changeCardState({...cardState, isHovered: false})
  }


  useEffect(() => {
    if (!isFirstRender) {
      const newIndex = trainingCard.activeQuestionIndex + 1;
      setActiveQuestionArrayIndex(newIndex)
    }
  }, [trigger])

  useEffect(() => {
    changeIsFirstRender(false)
  }, []);

  return (
    <Div
      width={width}
      // animate={cardState.isOpen ? {width: '47%'} : {width: '30%'}}
      className={cardState.isOpen ? "question" : "question question--rolled"}
      onClick={!cardState.isAnswerShown ? rollOutAnswerHandler : undefined}
      onMouseOver={cardHoverOverHandler}
      onMouseOut={cardHoverOutHandler}
      style={{backgroundColor: color}}
    >

      {/* Вопрос */}
      {
        <div
          className="question__container question__container--question"
        >
          <Question
            composition={question.questionComposition}
            className={'question__title'}
          />
        </div>
      }

      {/* Ответ */}
      {cardState.isAnswerShown &&
        <div className="question__container question__container--answer">
          Ответ:
          <Question
            composition={question.answerComposition}
            className={'question__text'}
          />
        </div>
      }

      <div className="card__buttons-container">

        {/* Кнопка разворачивающая/сворачивающая ответ */}
        {!cardState.isAnswerShown && hasShowAnswerButton &&
          <motion.button
            whileTap={{scale: 0.95}}
            whileHover={{scale: 1.05, backgroundColor: 'rgba(255,255,255,0.85)', transition: {duration: 0.2}}}
            onClick={rollOutAnswerHandler}
            className={'card-button card-button--close'}
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
            className={'card-button card-button--close'}
          >
            Свернуть карточку
          </motion.button>
        }

        {/* Кнопка для подтверждения правильного Ответа  */}
        {
          cardState.isAnswerShown && hasAnswerButtons &&
          <motion.button
            whileTap={{scale: 0.95}}
            whileHover={{scale: 1.05, backgroundColor: 'rgba(255, 69, 48, 0.95)', transition: {duration: 0.2}}}
            onClick={() => rightAnswerClickHandler()}
            className={cardState.isOpen ? 'card-button card-button--right card-button--close' : 'card-button card-button--right card-button--open'}
          >
            Я это знаю
          </motion.button>
        }

        {/* Кнопка для отправки вопроса на повторение  */}
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

        {
          hasQuestionCount && 
            <span className="question__count">{trainingCard.activeQuestionIndex + 1}/{trainingCard.questions.length}</span>
        }
      </div>

      <div
        className="question__rollout"
      >{!cardState.isAnswerShown && cardState.isHovered && !hasShowAnswerButton &&
        <div className="question__rollout-icon"></div>}
      </div>
    </Div>
  )
}

QuestionContainer.propTypes = {
  trainingCard: PropTypes.shape({
    UIState: PropTypes.string.isRequired,
    settings: PropTypes.shape({
      questionTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
      questionAmount: PropTypes.number.isRequired,
    }),
    questions: PropTypes.array.isRequired,
    activeQuestionIndex: PropTypes.number.isRequired
  }),
  question: PropTypes.shape({
    questionTitle: PropTypes.string.isRequired,
    questionComposition: PropTypes.array.isRequired,
    answerComposition: PropTypes.array.isRequired,
  }),
  questions: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  hasAnswerButtons: PropTypes.bool.isRequired,
  hasCardStateButtons: PropTypes.bool.isRequired,
  hasShowAnswerButton: PropTypes.bool.isRequired,
  hasQuestionCount: PropTypes.bool.isRequired,
  setActiveQuestionArrayIndex: PropTypes.func.isRequired,
  changeQuestionScore: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    trainingCard: state.TRAINING.trainingCard,
    questions: state.DATA.questions,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeTrainingCardUIState: (state) => dispatch(ActionCreatorTraining.changeTrainingCardUIState(state)),
    changeQuestionScore: (state) => dispatch(ActionCreatorData.changeQuestionScore(state)),
    setArrayOfQuestionsForTraining: (questions) => dispatch(ActionCreatorTraining.setArrayOfQuestionsForTraining(questions)),
    setActiveQuestionArrayIndex: (index) => dispatch(ActionCreatorTraining.setActiveQuestionArrayIndex(index))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
