import React from 'react';
import Input from "../UI/Input/Input";
import ButtonPage from "../UI/ButtonPage/ButtonPage";
import s from './Settings.module.css'

const Settings = ({value, setValue, pagesArray, changePage}) => {
    return (
        <div className={s.settings}>
           <span className={s.inputContainer}>
               <Input
                   placeholder="Search..."
                   value={value}
                   setValue={setValue}/>
           </span>
            <span className={s.buttonContainer}>
                     {pagesArray.map(p =>
                             <span
                                 onClick={() => changePage(p)}
                                 key={p}>
                     <ButtonPage>{p}</ButtonPage>
                </span>
                     )}
                </span>
        </div>
    );
};

export default Settings;