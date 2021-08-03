import '../styles/index.scss';
import '../styles/variables.scss';
import React from 'react';
import {colors} from "../utils/const.js";
import {motion} from 'framer-motion';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco, a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CodeSnippet from "./CodeSnippet.js";
import Header from "./Header.js";
import HeaderLink from "./HeaderLink.js";
import HeaderLinks from "./HeaderLinks.js";
import Main from "./Main.js";
import Section from "./Section.js";
import SectionTitle from "./SectionTitle.js";
import SectionInside from "./SectionInside.js";
import SectionInsideTitle from "./SectionInsideTitle.js";
import SectionInsideInfo from "./SectionInsideInfo.js";

function QuestionsPage() {
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
        <Section width={'48%'} minHeight={'500px'}>
          <SectionTitle outsideTitle={'HTML'} titleColor={colors.darkOrange} hasClickHandler={true}></SectionTitle>
          <SectionInside>
            <SectionInsideTitle titleColor={colors.lightOrange}></SectionInsideTitle>
          </SectionInside>
        </Section>

        <Section width={'48%'} minHeight={'500px'}  >
          <SectionTitle outsideTitle={'CSS'} titleColor={colors.darkIndigo} hasClickHandler={true}></SectionTitle>
          <SectionInside>
            <SectionInsideTitle titleColor={colors.lightIndigo}></SectionInsideTitle>
          </SectionInside>
        </Section>
        <Section width={'48%'} minHeight={'500px'}>
          <SectionTitle  outsideTitle={'JS'} titleColor={colors.darkRed} hasClickHandler={true}></SectionTitle>
          <SectionInside>
            <SectionInsideTitle titleColor={colors.lightRed}></SectionInsideTitle>
            <SectionInsideInfo>
            </SectionInsideInfo>
          </SectionInside>
        </Section>
        <Section width={'48%'} minHeight={'500px'}>
          <SectionTitle outsideTitle={'React'} titleColor={colors.darkTeal} hasClickHandler={true}></SectionTitle>
          <SectionInside>
            <SectionInsideTitle titleColor={colors.lightTeal}></SectionInsideTitle>
            <SectionInsideInfo>
            </SectionInsideInfo>
          </SectionInside>
        </Section>
      </Main>
    </React.Fragment>
  )
}

export default QuestionsPage;