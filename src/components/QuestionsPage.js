import '../styles/index.scss';
import '../styles/global/variables.scss';
import {connect} from "react-redux";
import React from 'react';
import {colors, questions} from "../utils/const.js";
// import {motion} from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco, a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeSnippet from "./CodeSnippet.js";
import {ActionCreator as ActionCreatorUI} from "../reducer/ui/ui.js";
import Header from "./Header.js";
import HeaderLink from "./HeaderLink.js";
import HeaderLinks from "./HeaderLinks.js";
import Main from "./Main.js";
import QuestionItem from "./QuestionItem.js";
import SmallSectionList from "./SmallSectionList.js";
import SmallSectionListContainer from "./SmallSectionListContainer.js";
import SmallSection from "./SmallSection.js";
import SmallSectionInsideTitle from "./SmallSectionInsideTitle.js";
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
        <SmallSectionListContainer>
          <SmallSectionList>
            <SmallSection hasClickHandler={true} titleText={'CSS'} titleColor={colors.lightIndigo}>
              <SmallSectionInsideTitle />
            </SmallSection>
            <SmallSection hasClickHandler={true} titleText={'React'} titleColor={colors.lightCyan}>
              <SmallSectionInsideTitle />
            </SmallSection>
            <SmallSection hasClickHandler={true} titleText={'JS'} titleColor={colors.lightRed}>
              <SmallSectionInsideTitle />
            </SmallSection>
          </SmallSectionList>
        </SmallSectionListContainer>

        <SectionListContainer>
          <SectionList  ComponentToRender={QuestionItem} questions={questions} changeActiveQuestionSection={changeActiveQuestionSection}/>
        </SectionListContainer>
      </Main>
    </React.Fragment>
  )
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