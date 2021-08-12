import '../styles/index.scss';
import PropTypes from 'prop-types';


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

Title.propTypes = {
  titleText: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
}

export default Title;