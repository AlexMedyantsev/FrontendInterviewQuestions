import '../styles/index.scss';
import '../styles/global/variables.scss';

function SubTitle({
  subTitleText,
  subTitleColor,
  hasClickHandler,
  clickHandler,
  reduxCallback
}) {
  return (
    <span
      className="sub__title"
      onClick={hasClickHandler ? () => clickHandler(subTitleText, reduxCallback) : ''}
      style={{color: subTitleColor}}
    >
      {subTitleText}
    </span>
  )
}

export default SubTitle;