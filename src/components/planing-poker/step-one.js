import React, {Component} from 'react';
import './planing-poker.css';

export default class StepOne extends Component {

    state = {
        value: '',
        loading: false
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.props.onAdd(this.state.value)
        }, 1000)
        
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const {value, loading} = this.state;
        
        const loadingMessage = loading ? <div> loading... </div> : null;

        return (
            <div>
                <form 
                    className='info-block'
                    onSubmit={this.onSubmit}>
                    <span>Select a number</span>
                    <input 
                        type='number'
                        placeholder='type here...'
                        onChange={this.onChange}
                        value={value}/>
                    <button
                        type='submit'>show fib
                    </button>
                    {loadingMessage}
                </form>
            </div>
        )
    }
}