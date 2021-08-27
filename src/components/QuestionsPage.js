import '../styles/index.scss';
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator as ActionCreatorUI} from "../reducer/ui/ui.js";
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
          <HeaderLink linkTo={'/questions'} active={true}>Вопросы</HeaderLink>
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
            arrayToRender={sectionTabs}
            hideable={true}
            hideableTriggerProp={activeQuestionSection}
          >
            <QuestionList
              questions={questions.filter(question => question.type === activeQuestionSection)}
              width={'48%'}
              hasAnswerButtons={false}
              hasCardStateButtons={true}
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

const mapStateToProps = (state) => {
  return {
    activeQuestionSection: state.UI.activeQuestionSection,
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeActiveQuestionSection: (section) => dispatch(ActionCreatorUI.changeActiveQuestionSection(section)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);