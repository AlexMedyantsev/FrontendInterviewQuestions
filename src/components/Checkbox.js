import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import {useFirstRender} from "../utils/common.js"


function Checkbox({
  value,
  array,
  addCallback,
  removeCallback,
}) {
  const [isChecked, changeIsChecked] = useState(
    array.includes(value) ? true : false
  )

  const firstRender = useFirstRender();

  useEffect(() => {
    if (!firstRender) {
      if (isChecked) {
        addCallback(value)
      } else {
        removeCallback(value)
      }
    }
  }, [isChecked]);

  const handleCheckboxCheck = () => {
    changeIsChecked(!isChecked)
  }

  return (
    <React.Fragment>
      <input
        type="checkbox"
        className="checkbox"
        id={value}
        name={value}
        value={value}
        checked={isChecked}
        onChange={handleCheckboxCheck}
      />
      <label htmlFor="scales">{value}</label>
    </React.Fragment>
  )
}

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
  addCallback: PropTypes.func.isRequired,
  removeCallback: PropTypes.func.isRequired,
}

export default Checkbox