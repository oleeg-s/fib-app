import React, {Component} from 'react';
import './planing-poker.css';

export default class StepThree extends Component {
    render() {
        return (
            <div className='info-block'>
                <span>Medium number is</span>
                <span className='big'>{this.props.result}</span>
            </div>
        )
    }
}