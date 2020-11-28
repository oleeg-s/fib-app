import React, {Component} from 'react';
import Header from '../header/header';
import MainPage from '../main-page/main-page';
import PlaningPoker from '../planing-poker/planing-poker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='app'>
                    <Header/>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/poker' component={PlaningPoker}/>
                </div>
            </Router>
        )
    }
}