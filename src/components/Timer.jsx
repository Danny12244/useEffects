// import React from 'react'
import React, { useState, useEffect } from "react";

const Timer = (props) => {

  const [timer, setTimer] = useState(props.Start);

  useEffect(() => {
    const id = setInterval(() => {
      if (timer == props.end) {
        alert('Timer has expired to start again click on Timer')
        clearInterval(id);
      } else {
        setTimer(timer + 1);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [timer]);
  return <div>Timer:{timer}</div>;
};

export default Timer;
