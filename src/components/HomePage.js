import '../styles/index.scss';
import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {trainingSection, aboutProject} from "../utils/const.js";
import Header from "./Header.js";
import HeaderLink from "./HeaderLink.js";
import HeaderLinks from "./HeaderLinks.js"
import Main from "./Main.js";
import Footer from "./Footer.js";
import SectionListContainer from "./SectionListContainer.js";
import SectionList from "./SectionList.js";
import SectionItem from "./SectionItem.js";
import Training from "./Training.js";
import AboutProject from "./AboutProject.js";

function HomePage(
  {
    trainingCard,
    changeTrainingCardUIState,
    arrayOfQuestionsForTraining,
    questions
  }
) {
  return (
    <React.Fragment>
      <Header>
        <HeaderLinks>
          <HeaderLink linkTo={'/'} active={true}>Главная</HeaderLink>
          <HeaderLink linkTo={'/questions'}>Вопросы</HeaderLink>
          <HeaderLink linkTo={'/progress'}>Прогресс</HeaderLink>
        </HeaderLinks>
        <div className="header__account">
          <div className="header__account-image"></div>
          <span className="header__account-name">Алексей</span>
        </div>
      </Header>
      <Main>
        <SectionListContainer>
          <SectionList>
            <SectionItem
              objectToRender={trainingSection}
              width={'65%'}
            >
              <Training
                trainingCard={trainingCard}
                changeTrainingCardUIState={changeTrainingCardUIState}
                arrayOfQuestionsForTraining={arrayOfQuestionsForTraining}
              />
            </SectionItem>
            <SectionItem
              objectToRender={aboutProject}
              width={'33%'}
            >
              <AboutProject />
            </SectionItem>
          </SectionList>
        </SectionListContainer>
      </Main>
      <Footer></Footer>
    </React.Fragment >
  )
}

HomePage.propTypes = {
  changeActiveQuestionSection: PropTypes.func.isRequired,
  activeQuestionSection: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return {
    activeQuestionSection: state.UI.activeQuestionSection,
    trainingCard: state.UI.trainingCard,
    questions: state.UI.questions,
    arrayOfQuestionsForTraining: state.UI.arrayOfQuestionsForTraining,
  }
}

export default connect(mapStateToProps)(HomePage);