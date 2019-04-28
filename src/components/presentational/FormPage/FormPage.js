import React from 'react';

import './FormPage.scss';
import { Button } from '../../inputs';

const FormPage = ({
    headerContent,
    bottomContent,
    stepNumber,
    stepsTotal
}) => {
    return (
        <div className='form-page'>
            <div className='form-page__step'>
                <Button
                    bold
                    iconProps={{
                        theme: 'primary',
                        type: 'arrow-left',
                        circleBackground: true,
                        fill: true
                    }}>
                    Back
                </Button>
                <div className='form-page__step_counter'>
                    {stepNumber} of {stepsTotal}
                </div>
                {headerContent}
                <div className='form-page__press-next'>
                    <Button
                        fill='primary'
                        rounded
                        rowReverse
                        iconProps={{type: 'arrow-right', large: true}}
                        inline
                        large
                        bold
                    >
                        Continue
                    </Button>
                    press Enter
                </div>
                <div>
                    {bottomContent}
                </div>
            </div>
        </div>
    );
};

export default FormPage;