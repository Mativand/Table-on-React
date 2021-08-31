import React from 'react';
import s from './ButtonPage.module.css'

const ButtonPage = ({children}) => {
    return (
        <span className={s.button}>{children}</span>
    );
};

export default ButtonPage;