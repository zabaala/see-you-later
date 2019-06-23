import React from 'react';
import './index.sass';

const NewLinkButton = ({onClick = () => {}}) =>
    <button className="btn-add-link" onClick={onClick}>
        <span>+</span>
    </button>;

export default NewLinkButton;