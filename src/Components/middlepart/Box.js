import React, { useState } from "react";
import './Box.css';

export default function () {  
const [inputText, setInputText] = useState('');
  
    const handleChange = (e) => {
      setInputText(e.target.value);
    };
    
  return (
    <>
    <div className="main-body">
    <div className="main-container">
    <div className="text-container">
     <h1 >this is a text container </h1>
    </div>
    <div className="typing-container" >
    <h1 className="input-text">Test Your Self...</h1>
      <textarea value={inputText} onChange={handleChange} />
    </div>
    </div>
    <div className="result-container">
    <h1>this is a result container</h1>
    
     
      {/* <i class=" fa fa-check-square fa-2x" area-hidden="true"></i> */}
      <i class=" fa fa-light fa-check fa-3x"></i>
      
  </div>
  </div>
  </>
  )
}

