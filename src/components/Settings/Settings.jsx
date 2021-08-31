import React from 'react';
import Input from "../UI/Input/Input";
import ButtonPage from "../UI/ButtonPage/ButtonPage";
import s from './Settings.module.css'

const Settings = ({value, setValue}) => {
    return (
        <div className={s.settings}>
            <Input
                placeholder="Search..."
                value={value}
                setValue={setValue}/>
            <ButtonPage>1</ButtonPage>
        </div>
    );
};

export default Settings;