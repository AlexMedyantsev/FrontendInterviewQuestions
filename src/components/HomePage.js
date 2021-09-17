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
import {getTrainingCard} from '../reducer/training/selectors.js';

function HomePage({trainingCard}) {
  return (
    <React.Fragment>
      <Header>
        <HeaderLinks>
          <HeaderLink linkTo={'/'} active={true}>Главная</HeaderLink>
          <HeaderLink linkTo={'/questions'} active={false}>Вопросы</HeaderLink>
          <HeaderLink linkTo={'/progress'} active={false}>Прогресс</HeaderLink>
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
  trainingCard: PropTypes.shape({
    UIState: PropTypes.string.isRequired,
    settings: PropTypes.shape({
      questionTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
      questionAmount: PropTypes.number.isRequired,
    }),
    questions: PropTypes.array.isRequired,
    activeQuestionIndex: PropTypes.number.isRequired
  }),
}

const mapStateToProps = (state) => {
  return {
    trainingCard: getTrainingCard(state),
  }
}

export default connect(mapStateToProps)(HomePage);