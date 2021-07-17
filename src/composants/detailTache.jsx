import React from 'react'

function DetailTache(props) {
    return (
        <article>
            <div className="contHaut">
                <div></div>
                <h3>{props.elem.titre}</h3>
                <button onClick={() => { props.supp(props.elem.id) }}>X</button>
            </div>
            <p>{props.elem.description}</p>
            <div className="contBas">
                {(props.elem.statut === 0) ? <div></div> : <button onClick={() => { props.statM(props.elem.id) }}>&lt;</button>}
                <button className="modBout">Modif</button>
                {(props.elem.statut === 2) ? <div></div> : <button onClick={() => { props.statP(props.elem.id) }}>&gt;</button>}
            </div>
        </article>
    )
}
export default DetailTache;