import '../styles/index.scss';
import '../styles/variables.scss';
import {motion} from 'framer-motion';
import Header from "./Header.js";
import HeaderLink from "./HeaderLink.js";
import HeaderLinks from "./HeaderLinks.js";
import Main from "./Main.js";
import Section from "./Section.js";
import SectionInside from "./SectionInside.js";
import SectionInsideTitle from "./SectionInsideTitle.js";
import Footer from "./Footer.js";

function HomePage() {
  return (
    <div className="">
      <Header>
         <HeaderLinks>
           <HeaderLink>Home</HeaderLink>
           <HeaderLink>Train</HeaderLink>
           <HeaderLink>About</HeaderLink>
         </HeaderLinks>
        <div className="header__account">
          <div className="header__account-image"></div>
          <span className="header__account-name">Алексей</span>
        </div>
      </Header>
      <Main>
        <Section outsideTitle={'Вопросы по JSX'} titleColor={'rgb(255, 59, 48)'}>
          <SectionInside width={'50%'} height={'1000px'}>
            <SectionInsideTitle titleColor={'rgb(255, 69, 58)'}></SectionInsideTitle>
          </SectionInside>
        </Section>
      </Main>
      <Footer></Footer>
    </div>
  )
}

export default HomePage;