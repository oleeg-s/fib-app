import React, {Component} from 'react';
import Input from '../input/input';
import Spinner from '../spinner/spinner';
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
    loading: false,
    disabled: false
}


onSubmit = (e) => {
    e.preventDefault();

    const {value1, value2, value3} = this.state.values;
    const {showFib} = this.props;

    if (showFib.includes(value1) && showFib.includes(value2) && showFib.includes(value3)) {

        this.setState({
            loading: true,
            disabled: true
        })

        setTimeout(() => {
            this.props.onAdd(`${value1}, ${value2}, ${value3}`)
            this.props.changeStep()
        }, 500)
    } else {
        this.setState({
            loading: false
        })
    }
}

onChange = (e) => {
    this.setState({
        values: {...this.state.values, [e.target.name]: Number(e.target.value)}
    })
}

isValid = (value) => {
    return () => {
        return this.props.showFib.includes(value);
    }
}

render() {
    const {errorMessage, loading} = this.state;
    const {value1, value2, value3} = this.state.values;
    const {showFib} = this.props;

    const loadingMessage = loading ? <Spinner/> : null;

    return (
        <div>
            <form className='info-block'
                onSubmit={this.onSubmit}>
                <span>Select any 3 numbers from fib list</span>
                <span>{showFib.join(' ')}</span>
                <div className='input-block'>
                    <Input 
                        onChange={this.onChange}
                        value={value1}
                        name='value1'
                        validation={this.isValid}
                        disabled={this.state.disabled}
                    />
                    <Input 
                        onChange={this.onChange}
                        value={value2}
                        name='value2'
                        validation={this.isValid}
                        disabled={this.state.disabled}
                    />
                    <Input 
                        onChange={this.onChange}
                        value={value3}
                        name='value3'
                        validation={this.isValid}
                        disabled={this.state.disabled}
                    />
                </div>
                <div className='red'>{errorMessage}</div>
                <button
                    type='submit'
                    className='button'
                    disabled={this.state.disabled}>show medium
                </button>
                {loadingMessage}
            </form>
        </div>
    )}
}