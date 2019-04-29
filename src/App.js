import React, { Component } from 'react';

import './normalize.scss';
import './App.scss';
import { Sidebar, ProgressBar, FormPage } from './components/presentational';
import { TextInput, MultiCheckbox, Button } from './components/inputs';
import SIDEBAR_STATUSES from './util/sidebarStatuses';

class App extends Component {
    render() {
      return (
        <div className="App">
            <div className="App__sidebar">
                <div className='App__logo'>
                    <span>LOGO</span>
                </div>
                <Sidebar
                    logoText='LOGO'
                    tabs={[
                        { text: 'Compliance', status: SIDEBAR_STATUSES.COMPLETED },
                        { text: 'Tax', status: SIDEBAR_STATUSES.INCOMPLETE },
                        { text: 'Accounting', status: SIDEBAR_STATUSES.COMPLETED },
                        { text: 'Employee Matters', status: SIDEBAR_STATUSES.ACTIVE },
                        { text: 'Advisory', status: SIDEBAR_STATUSES.INCOMPLETE },
                        { text: 'Cross Border', status: SIDEBAR_STATUSES.INCOMPLETE }
                    ]}
                />
            </div>
            <div className="App__main">
                <div className="App__header">
                    <ProgressBar percentage={20} />
                    <div className="App__save-container">
                        <Button
                            underlined
                            bold
                            iconProps={{type: 'save'}}
                        >
                            Save progress
                        </Button>
                    </div>
                </div>
                <FormPage
                    stepNumber={1}
                    stepsTotal={9}
                    headerContent={
                        <TextInput
                            large
                            label='Number of employees:'
                        />
                    }
                    bottomContent={
                        <div>
                            <MultiCheckbox
                                label='Payment method:'
                                checkboxes={[
                                    { label: 'Direct Deposit' },
                                    { label: 'Paycheck \'live\'' },
                                    { label: 'Both of the above' }
                                ]}
                            />
                            <MultiCheckbox
                                label='Payment method:'
                                checkboxes={[
                                    { label: 'Direct Deposit' },
                                    { label: 'Paycheck \'live\'' },
                                    { label: 'Both of the above' }
                                ]}
                            />
                            <MultiCheckbox
                                label='Payment method:'
                                checkboxes={[
                                    { label: 'Direct Deposit' },
                                    { label: 'Paycheck \'live\'' },
                                    { label: 'Both of the above' }
                                ]}
                            />
                            <MultiCheckbox
                                label='Payment method:'
                                checkboxes={[
                                    { label: 'Direct Deposit' },
                                    { label: 'Paycheck \'live\'' },
                                    { label: 'Both of the above' }
                                ]}
                            />
                            <MultiCheckbox
                                label='Payment method:'
                                checkboxes={[
                                    { label: 'Direct Deposit' },
                                    { label: 'Paycheck \'live\'' },
                                    { label: 'Both of the above' }
                                ]}
                            />
                        </div>
                    }
                >
                </FormPage>
            </div>
        </div>
      );
    }
}

export default App;
