import React, {Component} from 'react';
import Input from '../input/input';
import Spinner from '../spinner/spinner';

import './planing-poker.css';

export default class StepOne extends Component {

    state = {
        value: '',
        loading: false,
        disabled: false,
        error: false
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            error: false
        })
        
        if (this.state.value && this.state.value <= 15) {
            this.setState({
                loading: true,
                disabled: true
            })
            setTimeout(() => {
                this.props.onAdd(this.state.value)
                this.props.changeStep()
            }, 500)
        } else {
            this.setState({
                error: true
            })
        }
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const {value, loading, error} = this.state;
        
        const loadingMessage = loading ? <Spinner/> : null;
        const errorMessage = error ? <div className='info-text red'> please  select a number from 1 to 15 </div> : null;

        return (
            <div>
                <form 
                    className='info-block'
                    onSubmit={this.onSubmit}>
                    <span>Select a number</span>
                    <Input 
                        onChange={this.onChange}
                        value={value}
                        disabled={this.state.disabled}
                    />
                    {errorMessage}
                    <button
                        type='submit'
                        className='button'
                        disabled={this.state.disabled}>
                        show fib
                    </button>
                    {loadingMessage}
                </form>
            </div>
        )
    }
}