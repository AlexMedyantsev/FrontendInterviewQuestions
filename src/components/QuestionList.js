import React from 'react'
import QuestionContainer from './QuestionContainer'
import PropTypes from 'prop-types';

function QuestionList({questions,
  color,
  width,
  hasAnswerButtons,
  hasShowAnswerButton,
  hasCardStateButtons
}) {
  return (
    <ul className="question__list">
      {questions.map((question) => {
        return <QuestionContainer
          key={question.questionTitle}
          question={question}
          color={color}
          width={width}
          hasAnswerButtons={hasAnswerButtons}
          hasShowAnswerButton={hasShowAnswerButton}
          hasCardStateButtons={hasCardStateButtons}
        />
      })}
    </ul>
  )
}

QuestionList.propTypes = {
  questions: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
}

export default QuestionList