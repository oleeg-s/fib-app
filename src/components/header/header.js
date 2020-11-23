import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <ul className='page-list'>
                <li>
                    <a href='/'>planing poker</a>
                </li>
                <li>
                    <a href='/'>page 2</a>
                </li>
                <li>
                    <a href='/'>page 3</a>
                </li>
            </ul>
        </div>
    )
}

export default Header;