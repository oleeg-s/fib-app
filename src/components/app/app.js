import React, {Component} from 'react';
import Header from '../header/header';
import './app.css';
import Container from '../planing-poker/planing-poker';

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <Header/>
                <Container/>
            </div>
        )
    }
}