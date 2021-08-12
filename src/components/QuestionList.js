import React from 'react'
import QuestionContainer from './QuestionContainer'
import PropTypes from 'prop-types';

function QuestionList({questions, color}) {
  return (
    <ul className="question__list">
      {questions.map((question) => {
        return <QuestionContainer
          key={question.questionTitle}
          question={question}
          color={color}
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