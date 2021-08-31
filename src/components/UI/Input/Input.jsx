import React from 'react';
import s from './Input.module.css'

const Input = ({value, setValue}) => {
    return (
        <input placeholder=" Search..." type="text" value={value} onChange={(e => setValue(e.target.value)
        )} className={s.input}/>
    );
};

export default Input;