import '../styles/index.scss';

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

export default SmallSectionListContainer;