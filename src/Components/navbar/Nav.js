import React from 'react';
import './Nav.css';

//import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
export default function () {
  return (
    <div>
      <nav>
      <h1>Touch Typing </h1>
      <div className="right-nav">
        <button>submit your text</button>
        <i class="fa fa-refresh fa-2x" aria-hidden="true"></i>
     <h5><i class="fa fa-sign-in fa-2x" aria-hidden="true"></i> signIN</h5>
      
      </div>
      </nav>
   
    </div>
  )
}
