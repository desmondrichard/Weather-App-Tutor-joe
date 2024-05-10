import React from 'react';
import './Header.css';

function Header({ title }) {
    return (
        <div className='headerDiv'>
            <h4 className='oxygen-regular'>{title}</h4>
        </div>
    )
}

Header.defaultProps = {
    title: "Untitled"
}

export default Header