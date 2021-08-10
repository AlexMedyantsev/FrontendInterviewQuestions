import '../styles/index.scss';
import React, {useEffect} from 'react';
import {sectionTabs} from "../utils/const.js";

import Header from "./Header.js";
import HeaderLink from "./HeaderLink.js";
import HeaderLinks from "./HeaderLinks.js";
import Main from "./Main.js";
import SectionItem from "./SectionItem.js";
import SmallTabList from "./SmallTabList.js";
import SmallTabListContainer from "./SmallTabListContainer.js";
import SmallTab from "./SmallTab.js";
import SectionListContainer from "./SectionListContainer.js";
import SectionList from "./SectionList.js";

function QuestionsPage({activeQuestionSection, changeActiveQuestionSection}) {
  useEffect(() => {
    changeActiveQuestionSection('React');
  }, []);

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
            arrayToRender={sectionTabs}
            ComponentToRender={SmallTab}
            activeQuestionSection={activeQuestionSection}
            changeActiveQuestionSection={changeActiveQuestionSection}
            activeQuestionSection={activeQuestionSection}
          />
        </SmallTabListContainer>

        <SectionListContainer>
          <SectionList
            ComponentToRender={SectionItem}
            arrayToRender={sectionTabs}
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