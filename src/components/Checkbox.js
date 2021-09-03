import React, {useEffect, useState} from 'react';

function Checkbox({
  value,
  array,
  addCallback,
  removeCallback,
}) {
  const [isChecked, changeIsChecked] = useState(
    array.includes(value) ? true : false
  )

  useEffect(() => {
    if (isChecked) {
      addCallback(value)
    } else {
      removeCallback(value)
    }
  }, [isChecked]);

  let handleCheckboxCheck = () => {
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
      <label for="scales">{value}</label>
    </React.Fragment>
  )
}

export default Checkbox