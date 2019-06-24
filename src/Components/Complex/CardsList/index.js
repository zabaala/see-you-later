import React, {Component} from 'react';
import Card from "../../Simple/Card";
import DatabaseService from "../../../support/database/DatabaseService";

class CardsList extends Component {
    state = {
        cards: [],
        data: {}
    };

    componentDidMount = () => {
        DatabaseService.getDataList(
            'links',
            (receivedData) => this.setState({data: receivedData}, () => {
                const _cards = [];

                Object.keys(this.state.data).forEach((el, i) => {
                    _cards.push(<Card data={this.state.data[el]} />);
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