import React from 'react';
import {motion} from "framer-motion"

function Button({callback, text}) {

  let buttonClickHandler = () => {
    callback();
  }

  return (
    <motion.button
      whileHover={{
        scale: 1.02,
        transition: {duration: 0.2},
      }}
      whileTap={{
        scale: 0.99,
        transition: {duration: 0.2},
      }}
      className="training__start-btn"
      onClick={buttonClickHandler}
    >
      {text}
    </motion.button>)
}

export default Button