import React from 'react';

function SquareButton({value, valueThatTriggersActiveClass, callback}) {
  return (
    <button
      className={valueThatTriggersActiveClass === value ?
        "training__question-amount-btn training__question-amount-btn--active" :
        "training__question-amount-btn"
      }
      onClick={(e) => callback(value)(e)}
    >
      {value}
    </button>
  )
}

export default SquareButton;