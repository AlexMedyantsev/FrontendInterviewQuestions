import '../styles/index.scss';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {sectionTabs, questions} from "../utils/const.js";

import Header from "./Header.js";
import HeaderLink from "./HeaderLink.js";
import HeaderLinks from "./HeaderLinks.js";
import Main from "./Main.js";
import SmallTabList from "./SmallTabList.js";
import SmallTabListContainer from "./SmallTabListContainer.js";
import SmallTab from "./SmallTab.js";
import SectionListContainer from "./SectionListContainer.js";
import SectionList from "./SectionList.js";
import QuestionList from "./QuestionList.js";

function QuestionsPage({activeQuestionSection, changeActiveQuestionSection}) {
  useEffect(() => {
    changeActiveQuestionSection('JS');
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
        <SmallTabListContainer triggerProp={activeQuestionSection}>
          <SmallTabList
            arrayToRender={sectionTabs}
            ComponentToRender={SmallTab}
            triggerProp={activeQuestionSection}
            reduxCallback={changeActiveQuestionSection}
          />
        </SmallTabListContainer>

        <SectionListContainer>
          <SectionList
            // ComponentToRender={}
            arrayToRender={sectionTabs}
            hideable={true}
            hideableTriggerProp={activeQuestionSection}
          >
            <QuestionList
              questions={questions.filter(question => question.type === activeQuestionSection)}
            />
          </SectionList>
        </SectionListContainer>
      </Main>
    </React.Fragment >
  )
}

QuestionsPage.propTypes = {
  changeActiveQuestionSection: PropTypes.func.isRequired,
  activeQuestionSection: PropTypes.string.isRequired,
}

export default QuestionsPage;