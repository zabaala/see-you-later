import React, {Component} from 'react';
import Card from "../../Simple/Card";
import DatabaseService from "../../../support/database/DatabaseService";

class CardsList extends Component {
    state = {
        cards: [],
        data: {}
    };

    onDeleteHandler = (key, event) => {

        const ok = window.confirm('Deseja realmente remover este item? Esta ação é irreversível.');

        if (! ok) {
            return;
        }

        DatabaseService
            .remove(key, 'links')
            .then(response => console.log('[Firebase::remove]', response));
    };

    componentDidMount = () => {
        DatabaseService.getDataList(
            'links',
            (receivedData) => this.setState({data: receivedData}, () => {
                const _cards = [];

                Object.keys(this.state.data).forEach((el, i) => {
                    _cards.push(<Card data={this.state.data[el]} onDelete={this.onDeleteHandler} />);
                });

                this.setState({cards: _cards});
            }));
    };



    render = () => {
        return (
            <React.Fragment>
                <div className="row">
                    {this.state.cards}
                </div>
            </React.Fragment>
        );
    };
}

export default CardsList;