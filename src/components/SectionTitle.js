import '../styles/index.scss';
import '../styles/variables.scss';
import {connect} from "react-redux";
import styled from 'styled-components';
import {ActionCreator as ActionCreatorUI} from "../reducer/ui/ui.js";

function SectionTitle({outsideTitle, titleColor, hasClickHandler}) {

  let titleClickHandler = () => {

  }

  const Span = styled.span`
  color: ${titleColor}`

  return (
    outsideTitle && <Span
      onClick={hasClickHandler ? () => titleClickHandler() : ''}
      className='section__title'>{outsideTitle}
    </Span>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    changeActiveQuestionSection: (section) => dispatch(ActionCreatorUI.changeActiveQuestionSection(section)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(SectionTitle);