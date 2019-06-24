import React from 'react';

const Alert = ({color = 'danger', children}) => {
    return (
        <div className={'mb-5 alert alert-' + color}>
            {children}
        </div>
    );
};

export default Alert;