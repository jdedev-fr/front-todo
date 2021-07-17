import React from 'react'
import history from './historique/history';
import './App.css';
import Entete from './composants/entete';
import Pied from './composants/pied';
import Login from './composants/login';
import Inscription from './composants/inscription';
import ModifCompte from './composants/modif_compte';
import TableauTache from './composants/tableauTaches';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { conn: false }
    this.changeConn = this.changeConn.bind(this)
  }
  changeConn() {
    this.setState({ conn: !this.state.conn })
  }
  render() {
    return (
      <Router history={history}>
        <Entete connect={this.state.conn} deco={this.changeConn} />
        <Switch>
          <Route path="/inscription">
            <Inscription />
          </Route>
          <Route path="/monCompte">
            <ModifCompte login={localStorage.getItem("user")} deco={this.changeConn} />
          </Route>
          <Route path="/taches">
            <TableauTache />
          </Route>
          <Route path="/">
            <Login logOk={this.changeConn} />
          </Route>
        </Switch>
        <Pied />
      </Router>
    );
  }
}

export default App;
