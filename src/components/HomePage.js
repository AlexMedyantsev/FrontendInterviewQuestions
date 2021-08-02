import '../styles/index.scss';
import '../styles/variables.scss';
import Header from "./Header.js";
import Main from "./Main.js";
import Section from "./Section.js";
import SectionInside from "./SectionInside.js";
import SectionInsideTitle from "./SectionInsideTitle.js";
import Footer from "./Footer.js";

function HomePage() {
  return (
    <div className="">
      <Header>
        <ul className="header__links">
          <li className="header__link">Lorem</li>
          <li className="header__link">Ipsum</li>
          <li className="header__link">Dolor</li>
        </ul>
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