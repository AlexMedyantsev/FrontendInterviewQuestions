import '../styles/index.scss';
import React from 'react';
import {questions} from "../utils/const.js";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco, a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeSnippet from "./CodeSnippet.js";

import Header from "./Header.js";
import HeaderLink from "./HeaderLink.js";
import HeaderLinks from "./HeaderLinks.js";
import Main from "./Main.js";
import QuestionItem from "./QuestionItem.js";
import SmallTabList from "./SmallTabList.js";
import SmallTabListContainer from "./SmallTabListContainer.js";
import SmallTab from "./SmallTab.js";
import SectionListContainer from "./SectionListContainer.js";
import SectionList from "./SectionList.js";

function QuestionsPage({activeQuestionSection, changeActiveQuestionSection}) {
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
        <SmallTabListContainer activeQuestionSection={activeQuestionSection}>
          <SmallTabList 
            arrayToRender={questions}
            ComponentToRender={SmallTab}
            activeQuestionSection={activeQuestionSection}
            changeActiveQuestionSection={changeActiveQuestionSection}
            activeQuestionSection={activeQuestionSection}
          />
        </SmallTabListContainer>

        <SectionListContainer>
          <SectionList
            ComponentToRender={QuestionItem}
            arrayToRender={questions}
            hideable={true}
            activeQuestionSection={activeQuestionSection}
            changeActiveQuestionSection={changeActiveQuestionSection}
          />
        </SectionListContainer>
      </Main>
    </React.Fragment>
  )
}

export default QuestionsPage;