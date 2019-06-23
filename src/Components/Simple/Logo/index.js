import React from 'react';

const Logo = ({width = "auto", height = "auto"}) =>
    <img className="logo" src="/assets/images/logo.png" alt="See You Later logo" width={width} height={height} />;

export default Logo;