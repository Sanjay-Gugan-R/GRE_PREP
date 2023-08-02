import react from 'react';
import './Practice.css';

function Practice() {
    return (
        <div>
        <div className='nav'>
            <img src={require('./images/ilogo.png')}></img>
            <a href="/">Home</a>
            <a href="#">Practice</a>
            <a href="#">Test</a>
        </div>
        <div className='total'>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Classic I</h5>
                        <p class="card-text">Test your Fundamentals</p>
                        <a href="./Classic1.js" class="btn btn-primary">Give a Try</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Classic II</h5>
                        <p class="card-text">Brush it up!</p>
                        <a href="#" class="btn btn-primary">Give a Try</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Intermediate I</h5>
                        <p class="card-text">Upgrade</p>
                        <a href="#" class="btn btn-primary">Give a Try</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Intermediate II</h5>
                        <p class="card-text">Specialist</p>
                        <a href="#" class="btn btn-primary">Give a Try</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Advanced I</h5>
                        <p class="card-text">Pro</p>
                        <a href="#" class="btn btn-primary">Give a Try</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Advanced II</h5>
                        <p class="card-text">GRE is yours!</p>
                        <a href="#" class="btn btn-primary">Give a Try</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Practice;