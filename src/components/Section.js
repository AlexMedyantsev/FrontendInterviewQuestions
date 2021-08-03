import React, {useState} from 'react';
import '../styles/variables.scss';
import {connect} from "react-redux";


function Section({width, height, outsideTitle, titleColor, children}) {

  return (
    <section className="section" style={{width: width, height: height,}}>
      {children}
    </section >
  )
}

const mapStateToProps = (state) => {
  return {
    activeQuestionSection: state.UI.activeQuestionSection,
  }
}

export default connect(mapStateToProps)(Section);