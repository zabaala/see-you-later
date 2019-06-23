import React from 'react';
import Logo from "../Logo";
import './index.sass';

class Header extends React.Component {
    render = () => {
        return (
            <header className="container header">
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 col-sm-8 order-8 order-md-1 order-sm-1 text-md-left text-center">
                        <div className="current-date">Sábado, 23 de junho de 2019</div>
                        <div className="h1">Para ver hoje.</div>
                    </div>

                    <div className="col-12 col-md-4 col-sm-4 order-md-4 order-sm-4 order-1 text-md-right text-sm-right text-center mb-5">
                        <Logo />
                    </div>
                </div>

            </header>
        );
    }
}

export default Header;