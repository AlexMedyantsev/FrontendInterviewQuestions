import React from 'react'
import QuestionContainer from './QuestionContainer'
import PropTypes from 'prop-types';

function QuestionList({questions, color, hasAnswerButtons, hasCardStateButtons}) {
  return (
    <ul className="question__list">
      {questions.map((question) => {
        return <QuestionContainer
          key={question.questionTitle}
          question={question}
          color={color}
          hasAnswerButtons={hasAnswerButtons}
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