import React from 'react'
import DetailTache from './detailTache'

const tachesTests = [
    {
        id: 1,
        titre: "tache 1",
        description: "desc tache 1",
        statut: 0
    },
    {
        id: 2,
        titre: "tache 2",
        description: "desc tache 2",
        statut: 1
    },
    {
        id: 3,
        titre: "tache 3",
        description: "desc tache 3",
        statut: 2
    },
    {
        id: 4,
        titre: "tache 4",
        description: "desc tache 4",
        statut: 0
    }
]

class TableauTache extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tabTaches: tachesTests }
        this.statutMoins = this.statutMoins.bind(this)
        this.statutPlus = this.statutPlus.bind(this)
        this.suppTache = this.suppTache.bind(this)
    }
    getTableauParStatut(niv) {
        return this.state.tabTaches.filter((elem) => elem.statut === niv)
    }
    statutPlus(id) {
        let taches = [...this.state.tabTaches]
        let num = taches.findIndex((elem) => elem.id === id)
        if (num !== -1) {
            taches[num].statut = taches[num].statut + 1
            this.setState({ tabTaches: taches })
        }
    }
    statutMoins(id) {
        let taches = [...this.state.tabTaches]
        let num = taches.findIndex((elem) => elem.id === id)
        if (num !== -1) {
            taches[num].statut = taches[num].statut - 1
            this.setState({ tabTaches: taches })
        }
    }
    suppTache(id) {
        let taches = [...this.state.tabTaches]
        let num = taches.findIndex((elem) => elem.id === id)
        if (num !== -1) {
            taches.splice(num, 1)
            this.setState({ tabTaches: taches })
        }
    }
    render() {
        return (
            <div className="conteneurTaches">
                <section id="tacheAFaire">
                    <h2>A faire</h2>
                    {this.getTableauParStatut(0).map((elem, key) => {
                        return <DetailTache key={key} elem={elem} supp={this.suppTache} statP={this.statutPlus} statM={this.statutMoins} />
                    })}
                </section>
                <section id="tacheEnCour">
                    <h2>En cours</h2>
                    {this.getTableauParStatut(1).map((elem, key) => {
                        return <DetailTache key={key} elem={elem} supp={this.suppTache} statP={this.statutPlus} statM={this.statutMoins} />
                    })}
                </section>
                <section id="tacheTermine">
                    <h2>Terminé</h2>
                    {this.getTableauParStatut(2).map((elem, key) => {
                        return <DetailTache key={key} elem={elem} supp={this.suppTache} statP={this.statutPlus} statM={this.statutMoins} />
                    })}
                </section>
            </div>
        )
    }
}
export default TableauTache;