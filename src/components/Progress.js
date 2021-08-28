import React, {useState, useEffect} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {ProgressProvider} from '../utils/common.js';

const percentage = 66;

function Progress({color}) {
  const [progressBarValue, changeProgressBarValue] = useState(0)
  useEffect(() => {
    changeProgressBarValue(66)
  }, []);

  return (
    // <ProgressProvider valueStart={0} valueEnd={66}>
    //   {(value) => <CircularProgressbar
    //     value={value}
    //     styles={buildStyles({
    //       pathColor: `${color}`,
    //       textColor: `${color}`,
    //       trailColor: `rgb(250,245,250)`,
    //       backgroundColor: 'red',
    //     })}
    //     value={percentage}
    //     text={`${percentage}%`} />}
    // </ProgressProvider>
    <CircularProgressbar
      styles={buildStyles({
        pathColor: `${color}`,
        textColor: `${color}`,
        trailColor: `rgb(250,245,250)`,
        backgroundColor: 'red',
      })}
      value={progressBarValue}
      text={`${percentage}%`} />
  )
}

export default Progress;