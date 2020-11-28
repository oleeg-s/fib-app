import React, {Component} from 'react';
import './planing-poker.css';

const values = {
    value1: '',
    value2: '',
    value3: ''
}

export default class StepTwo extends Component {

state = {
    values,
    errorMessage: '',
    loading: false
}

onSubmit = (e) => {
    e.preventDefault();

    const {value1, value2, value3} = this.state.values;

    this.setState({
        loading: true
    })

    if (this.validation()) {
        setTimeout(() => {
            this.props.onAdd(`${value1}, ${value2}, ${value3}`)
        }, 1000)
    } 
}

onChange = (e) => {
    this.setState({
        values: {...this.state.values, [e.target.name]: Number(e.target.value)}
    })
}

validation = () => {
    const {value1, value2, value3} = this.state.values;
    const {showFib} = this.props;

    if (showFib.includes(value1) && showFib.includes(value2) && showFib.includes(value3)) {
        this.setState({
            errorMessage: ''
        })
        return true
    } else {
        this.setState({
            errorMessage: 'wrong number'
        })
        return false
    }
}

render() {
    const {errorMessage, loading} = this.state;
    const {value1, value2, value3} = this.state.values;
    const {showFib} = this.props;

    const loadingMessage = loading ? <div> loading... </div> : null;
    
    return (
        <div>
            <form className='info-block'
                onSubmit={this.onSubmit}>
                <span>Select any 3 numbers from fib list</span>
                <span>{showFib.join(' ')}</span>
                <div className='input-block'>
                    <input 
                        className='input-small'
                        onChange={this.onChange}
                        value={value1}
                        name='value1'/>
                    <input 
                        className='input-small'
                        onChange={this.onChange}
                        value={value2}
                        name='value2'/>
                    <input 
                        className='input-small'
                        onChange={this.onChange}
                        value={value3}
                        name='value3'/>
                </div>
                <div className='red'>{errorMessage}</div>
                <button
                    type='submit'>show result
                </button>
                {loadingMessage}
            </form>
        </div>
    )}
}