import React, {Component} from 'react';
import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';

import './planing-poker.css';

export default class PlaningPoker extends Component {

    state = {
        value: '',
        numbers: ''
    }

    addValue = (value) => {
        this.setState({
            value
        })
    }

    addNumbers = (numbers) => {
        this.setState({
            numbers
        })
    }

    fib = (n) => {
        if (!n) {
            return
        }

        let a = 1;
        let b = 1;
        let res = [1];

            for (let i = 3; i <= n; i++) {
                let c = a + b;
                a = b;
                b = c;
                res.push(b)
            }

        return res;
    }

    findMedium = (numbers) => {
        if (!this.state.numbers) {
            return
        }
        const res = numbers.split(',').sort((a, b) => a - b)

        return res[1]
    }

    render() {
        const {value, numbers} = this.state;

        const showStepOne = (!value) ? <StepOne value={value} onChange={this.onChange} onAdd={this.addValue}/> : null;
        const showStepTwo = (value && !numbers) ? <StepTwo showFib={this.fib(value)} onAdd={this.addNumbers}/> : null;
        const showStepThree = (!numbers) ? null : <StepThree result={this.findMedium(numbers)}/>;

        return (
            <div className='container'>
                {showStepOne}
                {showStepTwo}
                {showStepThree}
            </div>
        )
    }
}