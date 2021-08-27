import CodeSnippet from './CodeSnippet.js';
import PropTypes from 'prop-types'
import React from 'react'

function Question({composition, string}) {
  return (
    <React.Fragment>
      {composition.map((item) => {
        if (item.type === 'text') {
          return <div
            key={item.text}
            className="question__text"
          >
            {string}
            {item.text}
          </div>;
        }
        // Обязательно проверяем на то, есть ли код вообще, чтобы не получить ошибку
        else if (item.type === 'code' && item.code !== null) {
          return <CodeSnippet
            key={item.questionCode}
            code={item.code}
            codeLanguage={item.codeType}
          />
        }
      })}
    </React.Fragment>
  )
}

Question.propTypes = {
  composition: PropTypes.arrayOf(PropTypes.object).isRequired, 
  string: PropTypes.string.isRequired
}

export default Question;