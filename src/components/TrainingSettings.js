import '../styles/header.scss';
import React, {useEffect, useState} from 'react'

function TrainingSettings({trainingCard, changeTrainingCardUIState}) {
  const [activeLanguages, setActiveLanguages] = useState([])

  const closeSettingsClickHandler = () => {
    changeTrainingCardUIState('mainMenu')
  }

  useEffect(() => {
    console.log(activeLanguages)
  }, [activeLanguages]);

  const handleCheckboxCheck = (e) => {
    if (e.target.checked) {
      setActiveLanguages([...activeLanguages, e.target.value])
    } else {
      setActiveLanguages(activeLanguages.filter(city => city !== e.target.value))
    }
  }

  return (
    <React.Fragment>

      <button
        className="training__settings-btn"
        onClick={closeSettingsClickHandler}
      >
        Закрыть
      </button>
      <form className="form">
        <section className="form__section form__section--checkboxes">
          <legend className="form__legend">Выберите категории по которым будут заданы вопросы</legend>
          <div className="form__container">
            <input
              type="checkbox"
              id="scales"
              name="HTML"
              value="HTML"
              onChange={handleCheckboxCheck}
            />
            <label for="scales">HTML</label>
          </div>
          <div className="form__container">
            <input
              type="checkbox"
              id="scales"
              name="CSS"
              value="CSS"
              onChange={handleCheckboxCheck}
            />
            <label for="scales">CSS</label>
          </div>
          <div className="form__container">
            <input
              type="checkbox"
              id="scales"
              name="JS"
              value="JS"
              onChange={handleCheckboxCheck}
            />
            <label for="scales">JS</label>
          </div>
          <div className="form__container">
            <input
              type="checkbox"
              id="scales"
              name="React"
              value="React"
              onChange={handleCheckboxCheck}
            />
            <label for="scales">React</label>
          </div>
        </section>
        <section className="form__section">
          <label for="lname">Количество вопросов:</label>
          <input type="number" id="lname" name="lname" value="QuestionAmount" />
        </section>
      </form>
    </React.Fragment>
  );
}

export default TrainingSettings;