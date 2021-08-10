import '../styles/index.scss';
import React from 'react';
import {connect} from "react-redux";
import {ActionCreator as ActionCreatorUI} from "../reducer/ui/ui.js";
import {colors, mainMenuSections} from "../utils/const.js";
import {motion} from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco, a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeSnippet from "./CodeSnippet.js";
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
          <SectionList
            ComponentToRender={QuestionItem}
            arrayToRender={mainMenuSections}
            hideable={false}
            activeQuestionSection={activeQuestionSection}
            changeActiveQuestionSection={changeActiveQuestionSection}
          />
        </SectionListContainer>
      </Main>
      <Footer></Footer>
    </React.Fragment >
  )
}

export default HomePage;