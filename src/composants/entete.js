import React from 'react'
import {
    Link
} from "react-router-dom";
import history from '../historique/history';

function affNoCo() {
    return (
        <nav>
            <Link to="/">connection</Link>
            <Link to="/inscription">inscription</Link>
        </nav>
    )
}
function affCo(test) {
    return (
        <nav>
            <Link to="/taches">Mes taches</Link>
            <Link to="/monCompte">Mon Compte</Link>
            <a href="#" onClick={() => { test(); history.push('/') }}>Deconnection</a>
        </nav>
    )
}
function Entete(props) {
    return (
        <header>
            <h1>Todo List</h1>
            {(props.connect) ? affCo(props.deco) : affNoCo()}
        </header>
    )
}
export default Entete;