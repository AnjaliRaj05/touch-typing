// import React, { useState } from 'react';

// const TypingSpeedTest = () => {
//   const [inputText, setInputText] = useState('');
//   const [displayText, setDisplayText] = useState('');
//   const [mistakeCount, setMistakeCount] = useState(0);

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setInputText(value);
//     setMistakeCount(countMistakes(displayText, value));
//   };

//   const countMistakes = (text1, text2) => {
//     let mistakes = 0;
//     const minLength = Math.min(text1.length, text2.length);
    
//     for (let i = 0; i < minLength; i++) {
//       if (text1[i] !== text2[i]) {
//         mistakes++;
//       }
//     }
    
//     return mistakes + Math.abs(text1.length - text2.length);
//   };

//   const startTest = () => {
//     const text = 'This is the sample text for typing speed test.';
//     setDisplayText(text);
//     setInputText('');
//     setMistakeCount(0);
//   };

//   return (
//     <div>
//       <h1>Typing Speed Test</h1>
//       <p>{displayText}</p>
//       <input type="text" value={inputText} onChange={handleChange} />
//       <p>Mistakes: {mistakeCount}</p>
//       <button onClick={startTest}>Start Test</button>
//     </div>
//   );
// };

// export default TypingSpeedTest;
