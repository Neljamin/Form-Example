import React from 'react';

import { Label } from '../index';
import './MultiCheckbox.scss';

const MultiCheckbox = ({
    label,
    checkboxes
}) => {
    return (
        <div className='multi-checkbox'>
            <Label>{label}</Label>
            <div>
            {
                checkboxes.map(({label}) => (
                    <div key={label} className='multi-checkbox__item'>
                        <input type='checkbox' /> {label}
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default MultiCheckbox;