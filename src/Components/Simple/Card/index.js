import React from 'react';
import './index.sass';

const imageUrl = `https://abrilveja.files.wordpress.com/2019/05/brasil-damares-alves-20190221-022-copy.png`;

const Card = ({
    key,
    title,
    description,
    link,
    image,
    createdAt,
    seeAt
}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="card mx-3 mx-md-1 mx-sm-1" key={key}>
                <div className="card-img-top image">
                    <img src={imageUrl} alt="foo" />
                </div>
                <div className="card-body">
                    <div className="see-at">
                        <small>acessar em</small>
                        <br/>
                        24 de junho de 2019
                    </div>
                    <h2 className="title">Visitar site do ooppah</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Ab animi esse pariatur
                    </p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="d-block p-2">Acessar agora</a>
                </div>
            </div>
        </div>
    );
};

export default Card;