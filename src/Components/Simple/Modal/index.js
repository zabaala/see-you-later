import React from 'react';
import './index.sass';

const Modal = ({
   show = false,
   width = '80%',
   height = '300px',
    children,
    onClose = () => {}
}) => {

    const onCloseHandler = e => {
        e.preventDefault();
        onClose(e);
    };

    const content = (
        <div className="modal-overlay">
            <div className="modal-wrapper" style={{width: width, height: height}}>
                <div className="modal-body">
                    <a href="#" className="modal-close-button" onClick={e => onCloseHandler(e)}>X</a>
                    {children}
                </div>
            </div>
        </div>
    );

    return (
        show && content
    );
};

export default Modal;