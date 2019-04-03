import React from 'react';

import { Label } from '../index';
import './TextInput.scss';

const TextInput = ({
    label,
    large
}) => {
    return (
        <div className='text-input'>
            <Label large={large}>{label}</Label>
            <input className='text-input__input' />
        </div>
    );
};

export default TextInput;