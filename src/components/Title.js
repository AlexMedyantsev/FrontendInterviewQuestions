import '../styles/index.scss';


function Title({
  titleText,
  titleColor,
  hasClickHandler,
  clickHandler,
  reduxCallback
}) {
  return (
    <span
      className="title"
      onClick={hasClickHandler ? () => clickHandler(titleText, reduxCallback) : ''}
      style={{color: titleColor}}
    >
      {titleText}
    </span>
  )
}

export default Title;