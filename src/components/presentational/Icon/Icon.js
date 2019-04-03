import React from 'react';
import classNames from 'classnames';

import './Icon.scss';

const Icon = ({
    type,
    circle,
    fill,
    theme,
    large
}) => {
    const iconClasses = [
        'icon',
        circle && `icon--circle-${theme}`,
        fill && `icon--fill-${theme}`,
        large && 'icon--large'
    ];

    return (
        <span className={classNames(iconClasses)}>
            {type === 'save' && <i className="fas fa-save"></i>}
            {type && type !== 'save' && <div className={`icon__${type}`} alt={type} />}
        </span>
    );
};

export default Icon;