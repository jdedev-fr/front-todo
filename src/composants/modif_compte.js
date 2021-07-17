import React from 'react'
import { modifUser } from '../API/userApi'

class ModifCompte extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loginVal: props.login, mdpVal: "", confirmMdp: "" }
        this.chgConf = this.chgConf.bind(this)
        this.chgMdp = this.chgMdp.bind(this)
        this.chgLog = this.chgLog.bind(this)
        this.clicEnr = this.clicEnr.bind(this)
    }
    chgLog(e) {
        this.setState({ loginVal: e.target.value })
    }
    chgMdp(e) {
        this.setState({ mdpVal: e.target.value })
    }
    chgConf(e) {
        this.setState({ confirmMdp: e.target.value })
    }
    clicEnr() {
        if (this.state.mdpVal === this.state.confirmMdp) {
            modifUser(this.state.loginVal, this.state.mdpVal, localStorage.getItem('id')).then(data => {
                if (data.mess === undefined) {
                    alert("utilisateur modifié")
                    this.props.deco()
                    localStorage.removeItem("id")
                    localStorage.removeItem("cle")
                    localStorage.removeItem("user")
                }
            })
        }
        else {
            alert("les mots de passe sont eronées")
        }
    }
    render() {
        return (
            <section id="inscription">
                <article>
                    <input type="text" placeholder="Login" value={this.state.loginVal} onChange={this.chgLog}></input>
                    <input type="password" placeholder="Mot de passe" value={this.state.mdpVal} onChange={this.chgMdp}></input>
                    <input type="password" placeholder="Confirmer le mot de passe" value={this.state.confirmMdp} onChange={this.chgConf}></input>
                    <button onClick={this.clicEnr}>Modifier</button>
                </article>
            </section>
        )
    }
}
export default ModifCompte;