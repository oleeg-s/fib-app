import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <ul className='page-list'>
                <li>
                    <Link to='/'>
                        main page
                    </Link>
                </li>
                <li>
                    <Link to='poker'>
                        planing poker
                    </Link>
                </li>
                <li>
                    <Link to='page2'>
                        page 2
                    </Link>
                </li>
                <li>
                    <Link to='page3'>
                        page 3
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;
