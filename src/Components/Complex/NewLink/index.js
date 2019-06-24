import React, {Component} from 'react';
import moment from 'moment';
import Modal from "../../Simple/Modal";
import NewLinkButton from "../../Simple/NewLinkButton";
import './index.sass';
import DatabaseService from "../../../support/database/DatabaseService";
import Alert from "../../Simple/Alert";

class NewLink extends Component {
    state = {
        isOpen: false,
        creating: false,
        hasError: false,
        errorMessage: "",
        formData: {}
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

    componentDidMount() {
        console.log();
    }

    validate = () => {
        let isValid = true;
        let errorMessage = "";

        ['title', 'link', 'seeAt'].forEach((el, i) => {

            if (! this.state.formData.hasOwnProperty(el) || this.state.formData[el].trim() === "") {
                isValid = false;
                errorMessage = "[ERRO] Os campos link, titulo e data de visualização devem ser preenchidos corretamente.";

            }
        });

        // stop validation to show last errors.
        // if test don't enter in this condition, first validations passes
        // and the script is allowed to continue.
        if (! isValid) {
            this.setState({
                hasError: !isValid,
                errorMessage: errorMessage
            });
            return false;
        }

        if (! moment(this.state.formData.seeAt, 'DD/MM/YYYY').isValid()) {
            isValid = false;
            errorMessage = "[ERRO] Data inválida. A data deve possuir um formato dd/mm/aaaa.";
        }

        this.setState({
            hasError: !isValid,
            errorMessage: errorMessage
        });

        return isValid;
    };


    onSubmitHandler = e => {
        this.setState({creating: true});

        e.preventDefault();

        if (! this.validate()) {
            this.setState({creating: false});
            return;
        }

        const data = this.state.formData;
        data.seeAt = moment(data.seeAt, 'DD/MM/YYYY H:mm:ss').unix();
        data.createdAt = moment().unix();

        const newId = DatabaseService.pushData("links", data);

        this.setState({isOpen: false, creating: false});
    };

    onKeyPressHandler = e => this.setState({
        formData: {
            ...this.state.formData,
            [e.target.name]: e.target.value
        }
    });

    render = () => {
        return (
            <React.Fragment>
                <Modal show={this.state.isOpen} onClose={e => this.close(e)}>
                    <form className="form-new-link" action="?" autoComplete="Off" onSubmit={this.onSubmitHandler}>
                        <h1 className="form-title">Adicione um novo link para ver depois.</h1>

                        {
                            this.state.hasError &&
                            <Alert color='danger'>{this.state.errorMessage}</Alert>
                        }

                        <input
                            type="url"
                            name="link"
                            className="form-item"
                            placeholder="Qual o link?"
                            // required={true}
                            onKeyUp={this.onKeyPressHandler}
                        />

                        <input
                            type="text"
                            name="title"
                            className="form-item"
                            placeholder="Informe o título"
                            // required={true}
                            onKeyUp={this.onKeyPressHandler}
                        />

                        <textarea
                            name="description"
                            className="form-item"
                            placeholder="Gostaria de adicionar uma descrição?"
                            rows="2"
                            onKeyUp={this.onKeyPressHandler}
                        />

                        <input
                            type="text"
                            name="seeAt"
                            className="form-item"
                            placeholder="Ver quando?"
                            // required={true}
                            onKeyUp={this.onKeyPressHandler}
                        />

                        <button
                            className="btn btn-lg btn-outline-primary"
                            disabled={this.state.creating}
                        >
                            {this.state.creating && 'Adicionando, aguarde...'}
                            {!this.state.creating && 'Adicionar'}
                        </button>
                    </form>
                </Modal>

                <NewLinkButton onClick={e => this.open(e)} />
            </React.Fragment>
        );
    };
}

export default NewLink;