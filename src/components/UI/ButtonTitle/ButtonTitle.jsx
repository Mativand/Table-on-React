import React from 'react';
import s from './ButtonTitle.module.css'

const ButtonTitle = ({children, sortData, value}) => {
    return (
        <div className={s.button} onClick={(e) => sortData(e.target.dataset.value)} data-value={value}>
            {children}
        </div>
    );
};

export default ButtonTitle;