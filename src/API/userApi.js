export function connectUser(login, mdp) {
    return fetch('http://localhost:3000/api/user/connect', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: login, mdp: mdp })
    })
        .then(data => data.json())
        .catch(err => err.json())
}
export function modifUser(login, mdp, id) {
    let cle = localStorage.getItem("cle")
    return fetch('http://localhost:3000/api/user/' + id + '?id=' + id + '&cle=' + cle, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: login, mdp: mdp })
    })
        .then(data => data.json())
        .catch(err => err.json())
}