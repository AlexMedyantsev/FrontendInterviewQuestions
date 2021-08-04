import '../styles/index.scss';
import '../styles/global/variables.scss';

function SmallSectionInsideTitle({children, titleColor, titleText}) {
  return (
    <span className="section__small-inside-title" style={{color: titleColor}}>
      {titleText}
    </span>
  )
}

export default SmallSectionInsideTitle;