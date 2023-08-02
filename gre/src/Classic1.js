import react from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Classic1.css';

function Cl1() {
    const [data, setData] = useState({
        1: 'Accord',
        2: 'Evident',
        3: 'Concern',
        4: 'Commit',
        5: 'Establish',
        6: 'Conduct',
        7: 'Commission',
        8: 'Constitute',
        9: 'Rider',
        10: 'Appeal',
        11: 'Congrats you have cleared the round!'
      });
      const [meaning, setmeaning] = useState({
        1: "agreement, conformity. acted in accord with the company's policy. b. : a formal reaching of agreement : compact, treaty. a peace accord.",
        2: "Adjective. Clear and easily understood; obvious; apparent; something that can be seen or perceived without much effort or doubt.",
        3: "A matter of interest, importance, or significance; something that causes worry or anxiety. As a verb, it means to relate to or be of interest to someone; to be involved or interested in.",
        4: "To pledge, dedicate, or entrust oneself to a particular course of action or responsibility; to carry out or perform a promise, duty, or action.",
        5: "To set up, create, or bring into existence; to institute or introduce a system, organization, or entity.",
        6: "The manner of behaving, carrying out, or managing oneself; the way one acts or directs. As a verb, it means to lead, manage, or guide; to perform or execute.",
        7: "A formal authorization or assignment to perform a particular task or function; the act of granting authority. As a verb, it means to officially entrust someone with a task.",
        8: "To establish, form, or make up; to be the essential or primary elements that compose or define something.",
        9: "An additional clause or condition added to a document, contract, or legislative bill that modifies or supplements its original content.",
        10: "A request for consideration or a plea for help or support; the power or ability to attract or interest. As a verb, it means to make a serious request or call for help, support, or a favorable decision.",
        11: 'Congrats you have cleared the round!'
      });
    const [name, setname] = useState(0);
    const [card, setcard] = useState(1);
    const navi = useNavigate();
    function handleclick() {
        navi("./Practice.js");
    }
    function visibility(){
        if(name == 0) setname(1);
        else setname(0);
    }
    function cardvisi(){
        setname(0);
        setcard(card + 1);
        if(card + 1 > 10) setcard(11);
    }
    return (
        <div className='main'>
            <div className='nav'>
                <img src={require('./images/ilogo.png')}></img>
                <a href="/">Home</a>
                <a href="./Practice.js">Practice</a>
                <a href="#">Test</a>
            </div>
            <div>
                <center>
                {card <= 10 ? <div class="col-sm-6">
                    <div class="card" id="cart">
                        <div class="card-body" id="cart-body">
                            <h5 class="card-title" id="cart-title">{data[card]}</h5>
                            <p>{(name && card <= 10) ? meaning[card] : ""}</p>
                            {card <= 10 ? <a href="#" class="btn btn-primary" id="meaning" onClick={visibility}>Meaning</a> : ""}
                            <a href="#" class="btn btn-primary" id="next" onClick={cardvisi}> Next</a>
                        </div>
                    </div>
                </div> : ""}
                {card >= 11 ? 
                <div className='stest'>
                   <h1>Ready for the Test ?</h1>
                   <p>Instructions: </p>
                   <ul>
                      <li>There will be 10 questions with different meanings alloted</li>
                      <li>You have to find the apt words</li>
                      <li>You will be given a timer to each question</li>
                   </ul>
                   <a href="#" class="btn btn-primary" id="next" onClick={cardvisi}> Next</a>
                </div> : ""}
                </center>
            </div>
        </div>
    );
}

export default Cl1;