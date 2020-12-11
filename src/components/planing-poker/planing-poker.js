import React, {Component} from 'react';
import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';

import './planing-poker.css';

export default class PlaningPoker extends Component {

    state = {
        value: '',
        numbers: '',
        step: 1
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

    changeStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state;
        if (step > 1) {
            this.setState({
                step: step - 1
            })
        }
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
        const {value, numbers, step} = this.state;

        const showStepOne = (step === 1) ? <StepOne value={value} onChange={this.onChange} onAdd={this.addValue} changeStep={this.changeStep}/> : null;
        const showStepTwo = (step === 2) ? <StepTwo showFib={this.fib(value)} onAdd={this.addNumbers} changeStep={this.changeStep}/> : null;
        const showStepThree = (step === 3) ? <StepThree result={this.findMedium(numbers)}/> : null;

        return (
            <div className='container'>
                {showStepOne}
                {showStepTwo}
                {showStepThree}
                <button 
                    className='button'
                    onClick={this.prevStep}>
                    back
                </button>
            </div>
        )
    }
}