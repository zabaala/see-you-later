import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../support/number';

// app component
import Header from "../Simple/Header";

// component style
import './index.sass';
import CardsList from "../Complex/CardsList";
import NewLinkModal from "../Complex/NewLink";

const App = () => {
  return (
    <React.Fragment>
      <Header/>

      <main className="container">
        <CardsList />
      </main>

      <NewLinkModal />
    </React.Fragment>
  );
};

export default App;
