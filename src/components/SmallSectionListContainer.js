import '../styles/index.scss';
import '../styles/global/variables.scss';
import {ActionCreator as ActionCreatorUI} from "../reducer/ui/ui.js";
import {connect} from "react-redux";
import React from 'react';

function SmallSectionListContainer({children, activeQuestionSection}) {
  return (
    <div className={`small__section-container${activeQuestionSection ? "--visible" : ""}`}>
      {children}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    activeQuestionSection: state.UI.activeQuestionSection
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeActiveQuestionSection: (section) => dispatch(ActionCreatorUI.changeActiveQuestionSection(section)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(SmallSectionListContainer);