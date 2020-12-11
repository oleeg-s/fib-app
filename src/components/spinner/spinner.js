import React from 'react';
import './spinner.css';


const Spinner = () => {
    return(
            <div className='spinner-wrapper'>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
    )
}

export default Spinner;