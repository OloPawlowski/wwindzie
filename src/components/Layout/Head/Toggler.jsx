import React from 'react';
import classes from './Toggler.module.css';

const Toggler = props => {
    return (
        <button className={classes['toggle-button']} onClick={props.onShowMobileMenu}>
            <span className={classes['toggle-button_bar']}></span>
            <span className={classes['toggle-button_bar']}></span>
            <span className={classes['toggle-button_bar']}></span>
            <span className={classes['toggle-button_bar']}></span>
        </button>
    );
};
export default Toggler;