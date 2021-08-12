import '../styles/index.scss';


function Title({
  titleText,
  titleColor,
}) {
  return (
    <span
      className="title"
      style={{color: titleColor}}
    >
      {titleText}
    </span>
  )
}

export default Title;