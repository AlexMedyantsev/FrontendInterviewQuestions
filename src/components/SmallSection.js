import '../styles/index.scss';
import '../styles/global/variables.scss';
import React from 'react';
import {motion} from "framer-motion";
import {titleClickHandler} from '../utils/common.js';
import {ActionCreator as ActionCreatorUI} from "../reducer/ui/ui.js";
import {connect} from "react-redux";


function SmallSection({children, hasClickHandler, titleText, titleColor, changeActiveQuestionSection}) {
  return (
    <motion.li className="section__small"
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      onClick={hasClickHandler === true ? () => titleClickHandler(titleText, changeActiveQuestionSection) : ''}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {titleText, titleColor, changeActiveQuestionSection})
      )}
    </motion.li>
  )
}

const mapStateToProps = (state) => {
  return {
    // activeQuestionSection: state.UI.activeQuestionSection
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeActiveQuestionSection: (section) => dispatch(ActionCreatorUI.changeActiveQuestionSection(section)),
  }
)
export default connect(null, mapDispatchToProps)(SmallSection);
