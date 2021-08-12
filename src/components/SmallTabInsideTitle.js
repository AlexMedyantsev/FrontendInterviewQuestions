import '../styles/index.scss';

function SmallTabInsideTitle({titleColor, titleText, triggerProp}) {
  return (
    <span className="section__small-inside-title" style={titleText === triggerProp ? {color: 'white'} : {color: titleColor}}>
      {titleText}
    </span>
  )
}

export default SmallTabInsideTitle;