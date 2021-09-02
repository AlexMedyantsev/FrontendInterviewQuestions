import React, {useEffect, useState} from 'react';

function Checkbox({
  value,
  addCallback,
  removeCallback,
}) {
  const [isChecked, changeIsChecked] = useState(true)

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
        id="scales"
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