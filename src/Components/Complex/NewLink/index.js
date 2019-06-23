import React, {Component} from 'react';
import Modal from "../../Simple/Modal";
import NewLinkButton from "../../Simple/NewLinkButton";
import './index.sass';

class NewLink extends Component {
    state = {
        isOpen: false
    };

    show = (show) => {
        if (show) {
            window.scrollTo(0, 0);
        }

        this.setState({
            isOpen: show
        });
    };

    open = (e) => this.show(true);

    close = (e) => this.show(false);

    onSubmitHandler = e => {
        e.preventDefault();
    };

    render = () => {
        return (
            <React.Fragment>
                <Modal show={this.state.isOpen} onClose={e => this.close(e)}>
                    <form className="form-new-link" action="?" onSubmit={this.onSubmitHandler}>
                        <h1 className="form-title">Adicione um novo link para ver depois.</h1>

                        <input
                            type="url"
                            name="link"
                            className="form-item"
                            placeholder="Qual o link?"
                            required={true}
                        />

                        <input
                            type="text"
                            name="title"
                            className="form-item"
                            placeholder="Informe o título"
                            required={true}
                        />

                        <textarea
                            name="description"
                            className="form-item"
                            placeholder="Gostaria de adicionar uma descrição?"
                            rows="2"
                        />

                        <input
                            type="text"
                            name="seeAt"
                            className="form-item"
                            placeholder="Ver quando?"
                            required={true}
                        />

                        <button className="btn btn-lg btn-outline-primary">Adicionar</button>
                    </form>
                </Modal>

                <NewLinkButton onClick={e => this.open(e)} />
            </React.Fragment>
        );
    };
}

export default NewLink;