import React from 'react';
import './TextBox.css';

import { useSelector } from "react-redux";
export default function TextBox() {
const {presentText}=useSelector((store)=>store.AppReducer);
  return (
    
     <div className="main-b">
     
    
    <div className="Text-box" >
        {presentText}
    </div>
    </div>
    
  )
}