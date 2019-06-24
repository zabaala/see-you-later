import React from 'react';
import './index.sass';
import moment from 'moment';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);


const Card = ({data = {}, onDelete = () => {}}) => {
    const {
        key = '',
        title = '',
        description = '',
        link = '',
        image = '',
        createdAt = '',
        seeAt = ''
    } = data;

    const onDeleteHandler = (e) => {
        e.preventDefault();
        onDelete(key, e);
    };

    return (
        // object && card
        <div className="col-md-4 col-sm-6 col-12" key={key} id={key}>
            <div className="card mx-3 mx-md-1 mx-sm-1">
                <div className="card-img-top image">
                    { image && <img src={image} alt={title} /> }
                </div>
                <div className="card-body">
                    <div className="see-at">
                        <div className="card-action-bar">
                            <a href={key} onClick={onDeleteHandler}>
                                <FontAwesomeIcon icon="trash-alt" />
                            </a>
                        </div>
                        <small>acessar em</small>
                        <br/>
                        {moment(seeAt, 'X').format('DD MMMM YYYY HH:mm')}
                    </div>
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                </div>
                <div className="card-footer text-center">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-block p-2"
                        title={'visitar link: ' + title}
                    >Acessar agora</a>
                </div>
            </div>
        </div>
    );
};

export default Card;