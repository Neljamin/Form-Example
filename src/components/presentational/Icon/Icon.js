import React from 'react';
import classNames from 'classnames';

import './Icon.scss';

const Icon = ({
    type,
    circle,
    circleBackground,
    fill,
    theme,
    large,
    className
}) => {
    const iconClasses = [
        'icon',
        className,
        circle && `icon--circle-${theme}`,
        circleBackground && `icon--circle-background-${theme}`,
        fill && `icon--fill-${theme}`,
        large && 'icon--large'
    ];

    return (
        <span className={classNames(iconClasses)}>
            <div className={`icon__${type}`} alt={type} />
        </span>
    );
};

export default Icon;