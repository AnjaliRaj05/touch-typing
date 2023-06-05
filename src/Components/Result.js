import React from 'react';

import './Result.css';
import { useSelector } from 'react-redux';
export default function Result() {
    const { accuracy, pressedkey, wpm } = useSelector(
        (store) => store.AppReducer
      );
  return (
    
    <div className="result-container"> 

    <div className="r-box">
     <h1>WPM :-{wpm}</h1>
     </div> 
     <div className="r-box">
      <h1>   <i class=" fa fa-light fa-check "></i>Accuracy :-{`${accuracy}%`}</h1>
      <h1>Number of keys pressed in a 5 mintutes:-{pressedkey} </h1>
     </div>
     
    </div>
  )
}
