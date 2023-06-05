

import './App.css';

import Nav from './Components/navbar/Nav'
import Typewriter from 'typewriter-effect'
import TextBox from './Components/middlepart/TextBox';
import TypingBox from './Components/middlepart/TypingBox';
import Footer from './Components/footer/Footer'
import Result from './Components/Result';
function App() {
  return (
    <div>
     <Nav/>
       {/* <Box/> */}
       <div className='animated-text'>  
      <Typewriter
        options={
          {
            autoStart: true,
            loop: true,
            delay: 50,
            strings:["Hey,you want to check your speed??"]
          }
        }
      />

     </div>
     
     <div className='box-box'>
    
       <TextBox/>
       <TypingBox/>
        <Result/>
        </div>
        <Footer/>
        
        

    </div>
  );
}

export default App;
