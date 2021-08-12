import '../styles/index.scss';

import {ActionCreator as ActionCreatorUI} from "../reducer/ui/ui.js";
import {connect} from "react-redux";
import React from 'react';

function SmallTabListContainer({children, triggerProp}) {
  return (
    <div className={`small__section-container${triggerProp ? "--visible" : ""}`}>
      {children}
    </div>
  )
}

export default SmallTabListContainer;