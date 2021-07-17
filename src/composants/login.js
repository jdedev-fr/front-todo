import React from 'react'
import { Link } from 'react-router-dom'
import { connectUser } from '../API/userApi'
import history from '../historique/history';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loginVal: "", passVal: "" }
        this.chgLog = this.chgLog.bind(this)
        this.chgPass = this.chgPass.bind(this)
        this.clicConnect = this.clicConnect.bind(this)
    }
    chgLog(e) {
        this.setState({ loginVal: e.target.value })
    }
    chgPass(e) {
        this.setState({ passVal: e.target.value })
    }
    clicConnect() {

        connectUser(this.state.loginVal, this.state.passVal).then(data => {
            //console.log(data)
            if (data.id !== undefined) {
                alert("on est connecté")
                this.props.logOk()
                localStorage.setItem("id", data.id)
                localStorage.setItem("cle", data.cle)
                localStorage.setItem("user", this.state.loginVal)
                history.push('/taches')
            }
            else {
                alert("Connection impossible")
            }
        })
        //  alert("on a cliqué chef !")
    }
    render() {
        return (
            <section id="connexion">
                <article>
                    <input type="text" placeholder="Login" value={this.state.loginVal} onChange={this.chgLog}></input>
                    <input type="password" placeholder="Mot de passe" value={this.state.passVal} onChange={this.chgPass}></input>
                    <button onClick={this.clicConnect}>Connexion</button>
                    <p>Pas de compte, <Link to="/inscription">Inscrivez vous</Link> !</p>
                </article>
            </section>
        )
    }
}
export default Login;