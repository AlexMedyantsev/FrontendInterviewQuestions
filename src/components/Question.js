import CodeSnippet from './CodeSnippet.js';
import PropTypes from 'prop-types'
import React from 'react'

function Question({composition, className}) {
  return (
    <React.Fragment>
      {composition.map((item) => {
        // Используем разные подходы для отрисовки различных типов данных
        if (item.type === 'text') {
          return <pre
            key={item.text}
            className={className}
          >
            {item.text}
          </pre>;
        }
        // Обязательно проверяем на то, есть ли код вообще, чтобы не получить ошибку
        else if (item.type === 'code' && item.code !== null) {
          return <CodeSnippet
            key={item.code}
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
  className: PropTypes.string.isRequired
}

export default Question;