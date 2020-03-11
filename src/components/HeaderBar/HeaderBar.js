import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderBar.scss';

function HeaderBar() {

    return(
        <div className='headerbar'>
            <div className='headerbar__page headerbar__page--home'>
                <Link className='headerbar__page_text'  to='/'>Home</Link>
            </div>
            <div className='headerbar__page headerbar__page--about'>
                <Link className='headerbar__page_text' to='/about'>About</Link>
            </div>
        </div>
    )
}

export default HeaderBar;