import React from 'react';
import classNames from 'classnames';

import './Sidebar.scss';
import SIDEBAR_STATUSES from '../../../util/sidebarStatuses';
import Icon from '../Icon/Icon';

const Sidebar = ({
    tabs,
    className
}) => {
    return (
        <div className={classNames(className, 'sidebar')}>
            {tabs.map(({ text, status }) => {
                const sidebarTabClasses = [
                    'sidebar__tab',
                    status === SIDEBAR_STATUSES.ACTIVE && 'sidebar__tab--active'
                ];
                return (
                    <div key={text} className={classNames(sidebarTabClasses)}>
                        <Icon
                            theme='primary'
                            circle={[SIDEBAR_STATUSES.ACTIVE, SIDEBAR_STATUSES.INCOMPLETE].includes(status)}
                            fill={status === SIDEBAR_STATUSES.ACTIVE}
                            type={status === SIDEBAR_STATUSES.COMPLETED ? 'tick': undefined}
                        />
                        <div className='sidebar__text'>
                            {text}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

Sidebar.defaultProps = {
    tabs: []
}

export default Sidebar;