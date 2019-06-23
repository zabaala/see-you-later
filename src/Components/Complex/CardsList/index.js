import React, {Component} from 'react';
import Card from "../../Simple/Card";

class CardsList extends Component {
    state = {
        cards: []
    };

    componentDidMount = () => {
        const cards = [];

        [...7].forEach((el, i) => cards.push(<Card key={i} />));

        this.setState({
            cards: cards
        });
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