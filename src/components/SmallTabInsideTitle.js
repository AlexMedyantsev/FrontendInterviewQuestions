import '../styles/index.scss';

function SmallTabInsideTitle({titleColor, titleText, activeQuestionSection}) {
  return (
    <span className="section__small-inside-title" style={titleText === activeQuestionSection ? {color: 'white'} : {color: titleColor}}>
      {titleText}
    </span>
  )
}

export default SmallTabInsideTitle;