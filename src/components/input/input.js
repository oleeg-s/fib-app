import React, {Component} from 'react';
import './input.css';

export default class Input extends Component {

    state = {
        error: ''
    }

/**
 * onChange
 * value
 * name
 * error?
 * validation
 */

    onChange = (e) => {
        if (this.props.validation && !this.props.validation(Number(e.target.value))()) {
            this.setState({
                error: 'wrong number'
            })
        } else {
            this.setState({
                error: ''
            })
        }
        this.props.onChange(e);
    }

    render() {
        let inputClass = 'input'
        
        if (this.state.error) {
            inputClass += ' input-error'
        }

        return (
            <div>
                <input
                    className={inputClass}
                    placeholder='type here...'
                    onChange={this.onChange}
                    value={this.props.value}
                    name={this.props.name}
                    disabled={this.props.disabled}/>
                {this.state.error && <span className='info-text red'>{this.state.error}</span>}
            </div>
        )
    }
}