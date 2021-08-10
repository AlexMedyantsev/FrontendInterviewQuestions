import CodeSnippet from './CodeSnippet.js';
import React from 'react'

function Question({composition}) {
  return (
    <React.Fragment>
      {composition.map((item) => {
        if (item.type === 'text') {
          return <div
            key={item.text}
            className="question__text"
          >
            {item.text}
          </div>;
        }
        else if (item.type === 'code') {
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

export default Question;