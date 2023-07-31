import react from 'react';
import './Home.css';

function Home(){
    return(
       <div className='main'>
         <div className='nav'>
            <img src={require('./images/ilogo.png')}></img>
            <a href="#">Home</a>
            <a href="#">Practice</a>
            <a href="#">Test</a>
         </div>
         <div className='intro'>
            <h1>WELCOME TO <span style = {{color: 'burlywood'}}>GREGenius</span></h1>
            <p>Enhance your Vocabulary Skills Now!</p>
         </div>
         <div className='info'>
            <p>FACING PROBLEM WITH MEMORISING WORDS?</p>
            <p>GET READY TO EMBARK ON A JOURNEY OF ENHANCING YOUR VOCABULARY</p><br></br>
            <p>GET READY TO ENHANCE YOUR VOCABULARY !</p>
         </div>
         <div className='how'>
            <h1>HOW IT WORKS?</h1>
            <p>Learn new words from the assessments given and memorise it.</p>
            <p>Then you can attend the tests and check your memory skills.</p>
            <p>You will have to finish it before the timer runs out.</p>
         </div>
         <div className='learn'>
            <h1>WHAT ARE YOU WAITING FOR?</h1>
            <p>Start learning words today!</p>
            <button>Start learning</button>
         </div>
         <div className='foot'>
            
         </div>
       </div>
    );
}

export default Home;