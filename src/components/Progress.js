import React, {useState, useEffect} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {ProgressProvider} from '../utils/common.js';
import styled from 'styled-components';

const Title = styled('h2')`
  color: color;
  margin-bottom: 30px;
`

function Progress({color, language, questions}) {
  const [progressBarValue, changeProgressBarValue] = useState(0)

  useEffect(() => {
    const filteredQuestionsByLanguage = questions.filter(q => q.type === language)

    const filteredQuestionsWithNegativeOrNeutralScore = filteredQuestionsByLanguage.filter(q => q.score <= 0)
    const filteredQuestionsWithPositiveScore = filteredQuestionsByLanguage.filter(q => q.score > 0)

    const percentage = Math.round(100 / filteredQuestionsByLanguage.length * filteredQuestionsWithPositiveScore.length)
    changeProgressBarValue(percentage)
  }, []);

  return (
    <React.Fragment>
      <Title>
        {progressBarValue === 100 ? 'Поздравляем вы ответили на все вопросы по ' + language + '!' : ''}
      </Title>
      <CircularProgressbar
        styles={buildStyles({
          pathColor: `${color}`,
          textColor: `${color}`,
          trailColor: `rgb(250,245,250)`,
          backgroundColor: 'red',
        })}
        value={progressBarValue}
        text={`${progressBarValue}%`}
      />
    </React.Fragment>
  )
}

export default Progress;