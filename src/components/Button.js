import React from 'react';
import PropTypes from 'prop-types'
import {motion} from "framer-motion"

function Button({callback, text}) {

  const buttonClickHandler = () => {
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

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button