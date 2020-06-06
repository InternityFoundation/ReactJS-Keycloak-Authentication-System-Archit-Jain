import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="container mt-5" align='center'>
                <div>
                    <h3><Link to="/">Public component</Link></h3>
                    <h3 className='my-3'><Link to="/secured">Secured component</Link></h3>
                </div>
                <Route exact path="/" component={Welcome}/>
                <Route path="/secured" component={Secured}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
