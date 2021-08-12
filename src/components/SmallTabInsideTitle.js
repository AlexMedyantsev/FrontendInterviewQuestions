import '../styles/index.scss'
import PropTypes from 'prop-types'

function SmallTabInsideTitle({titleColor, titleText, triggerProp}) {
  return (
    <span className="section__small-inside-title" style={titleText === triggerProp ? {color: 'white'} : {color: titleColor}}>
      {titleText}
    </span>
  )
}

SmallTabInsideTitle.propTypes = {
  titleColor: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
  triggerProp: PropTypes.string.isRequired
}

export default SmallTabInsideTitle