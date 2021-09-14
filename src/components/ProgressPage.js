import React from 'react';
import '../styles/index.scss';
import {connect} from 'react-redux'
import Header from "./Header.js";
import HeaderLink from "./HeaderLink.js";
import HeaderLinks from "./HeaderLinks.js"
import Main from "./Main.js";
import SectionListContainer from "./SectionListContainer.js";
import SectionList from "./SectionList.js";
import SectionItem from "./SectionItem.js";
import {sectionTabs, questions} from "../utils/const.js";

import Progress from "./Progress.js";

function ProgressPage({questions}) {
  return (
    <React.Fragment>
      <Header>
        <HeaderLinks>
          <HeaderLink linkTo={'/'} active={false}>Главная</HeaderLink>
          <HeaderLink linkTo={'/questions'} active={false}>Вопросы</HeaderLink>
          <HeaderLink linkTo={'/progress'} active={true}>Прогресс</HeaderLink>
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
              objectToRender={sectionTabs[0]}
              width={'48%'}
            >
              <Progress
                questions={questions}
              />
            </SectionItem>
            <SectionItem
              objectToRender={sectionTabs[1]}
              width={'48%'}
            >
              <Progress
                questions={questions}
              />
            </SectionItem>
            <SectionItem
              objectToRender={sectionTabs[2]}
              width={'48%'}
            >
              <Progress
                questions={questions}
              />
            </SectionItem>
            <SectionItem
              objectToRender={sectionTabs[3]}
              width={'48%'}
            >
              <Progress
                questions={questions}
              />
            </SectionItem>
          </SectionList>
        </SectionListContainer>
      </Main>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    questions: state.DATA.questions
  }
}

export default connect(mapStateToProps)(ProgressPage);