import React from 'react';
import {motion} from "framer-motion"

function SquareButton({value, valueThatTriggersActiveClass, callback}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04
      }}
      whileTap={{
        scale: 0.96
      }}
      className={valueThatTriggersActiveClass === value ?
        "training__question-amount-btn training__question-amount-btn--active" :
        "training__question-amount-btn"
      }
      onClick={(e) => callback(value)(e)}
    >
      {value}
    </motion.button>
  )
}

export default SquareButton;