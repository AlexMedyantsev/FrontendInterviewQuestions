import '../styles/index.scss';
import '../styles/variables.scss';
import React from 'react';
import {motion} from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco, a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeSnippet from "./CodeSnippet.js";
import Header from "./Header.js";
import HeaderLink from "./HeaderLink.js";
import HeaderLinks from "./HeaderLinks.js";
import Main from "./Main.js";
import Section from "./Section.js";
import SectionInside from "./SectionInside.js";
import SectionInsideTitle from "./SectionInsideTitle.js";
import SectionInsideInfo from "./SectionInsideInfo.js";

function QuestionsPage({children}) {
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
        <Section width={'48%'} height={'1000px'} outsideTitle={'HTML'} titleColor={`$lightTeal`}>
          <SectionInside>
            <SectionInsideTitle titleColor={'rgb(255, 69, 58)'}></SectionInsideTitle>
            <SectionInsideInfo>
            </SectionInsideInfo>
          </SectionInside>
        </Section>
        <Section width={'48%'} height={'1000px'} outsideTitle={'CSS'} titleColor={'rgb(255, 59, 48)'}>
          <SectionInside>
            <SectionInsideTitle titleColor={'rgb(255, 69, 58)'}></SectionInsideTitle>
          </SectionInside>
        </Section>
      </Main>
    </React.Fragment>
  )
}

export default QuestionsPage;