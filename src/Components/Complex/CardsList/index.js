import React, {Component} from 'react';
import Card from "../../Simple/Card";
import DatabaseService from "../../../support/database/DatabaseService";

class CardsList extends Component {
    state = {
        cards: [],
        data: {}
    };

    componentDidMount = () => {


        // const newId = DatabaseService.pushData("links", {
        //     title: "Link de teste",
        //     description: "uma descricao qualquer",
        //     link: "https://images.google.com",
        //     image: "https://abrilveja.files.wordpress.com/2019/05/brasil-damares-alves-20190221-022-copy.png",
        //     createAt: new Date().toDateString(),
        //     seeAt: new Date().toDateString()
        // });

        // console.log('[FIREBASE] item created with id: ', newId);

        DatabaseService.getDataList(
            'links',
            (receivedData) => this.setState({data: receivedData}, () => {
                const _cards = [];

                Object.keys(this.state.data).forEach((el, i) => {
                    _cards.push(<Card data={this.state.data[el]} />);
                });

                this.setState({cards: _cards});
            }));

        // [...7].forEach((el, i) => );


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