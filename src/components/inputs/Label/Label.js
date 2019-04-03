import React from 'react';
import classNames from 'classnames';

import './Label.scss';

const Label = ({
    children,
    large
}) => {
    const labelClasses = [
        'label',
        large && 'label--large'
    ];
    return (
        <label className={classNames(labelClasses)}>
            {children}
        </label>
    );
};

export default Label;