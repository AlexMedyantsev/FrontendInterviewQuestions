import '../styles/index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {mainMenuSections} from "../utils/const.js";
import Header from "./Header.js";
import HeaderLink from "./HeaderLink.js";
import HeaderLinks from "./HeaderLinks.js"
import Main from "./Main.js";
import Footer from "./Footer.js";
import SectionListContainer from "./SectionListContainer.js";
import SectionList from "./SectionList.js";
import QuestionItem from "./SectionItem.js";

function HomePage({changeActiveQuestionSection, activeQuestionSection}) {
  return (
    <React.Fragment>
      <Header>
        <HeaderLinks>
          <HeaderLink linkTo={'/'}>Главная</HeaderLink>
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
          <SectionList
            ComponentToRender={QuestionItem}
            arrayToRender={mainMenuSections}
            hideable={false}
            hideableTriggerProp={undefined}
          />
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

export default HomePage;