import React from 'react';
import Image from '../poll.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';


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
       
     
      <h1> <FontAwesomeIcon icon={faSquarePollHorizontal } beat style={{color:"red",}}/> Accuracy :-{`${accuracy}%`}</h1>

      <h1>Number of keys pressed in a 5 mintutes:-{pressedkey} </h1>
     </div>
     
    </div>
  )
}
