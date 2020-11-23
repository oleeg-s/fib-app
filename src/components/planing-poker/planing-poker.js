import React, {Component} from 'react';
import './planing-poker.css';

export default class Container extends Component {

    state = {
        value: ''
    }

    addValue = (value) => {
        this.setState({
            value
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

    render() {

        const view = (!this.state.value) ? <StepOne value={this.state.value} onChange={this.onChange} onAdd={this.addValue}/> 
        : <StepTwo showFib={this.fib(this.state.value).join(' ')}/>

        return (
            <div className='container'>
                {view}
            </div>

        )
    }
}

class StepOne extends Component {

    state = {
        value: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.value)
        this.setState({
            value: ''
        })
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const {value} = this.state;

        return (
            <div>
                <form className='info-block'
                    onSubmit={this.onSubmit}>
                    <span>Select a number</span>
                    <input 
                        placeholder='type here...'
                        onChange={this.onChange}
                        value={value}/>
                    <button
                        type='submit'>show fib</button>
                </form>
            </div>
        )
    }
}

class StepTwo extends Component {

    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {

        const {value} = this.state;
        const {showFib} = this.props;

        return (
            <div>
            <form className='info-block'
                onSubmit={this.onSubmit}>
                <span>Select any 3 numbers from fib list</span>
                <span>{showFib}</span>
                <input 
                    placeholder='type here...'
                    onChange={this.onChange}
                    value={value}/>
                <button
                    type='submit'>show fib</button>
            </form>
        </div>
        )
    }
}