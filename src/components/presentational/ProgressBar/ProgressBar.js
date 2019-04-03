import React from 'react';

import './ProgressBar.scss';

const ProgressBar = ({
    percentage
}) => {
    return (
        <div className='progress-bar'>
            <div className='progress-bar__background' />
            <div style={{width: `${percentage}%`}}>
                <div className='progress-bar__fill' />
            </div>
        </div>
    );
};

export default ProgressBar;