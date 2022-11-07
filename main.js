function createGame(player1, hour, player2) {
    return `
    <li class="tito">
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" title="${player1}">
            <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" title="${player2}">
    </li>

    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4
    return `
    <div class="card" style="animation-delay: ${delay}s">

    <h2>${date} <span>${day}</span></h2>

    <ul>
        ${games}
    </ul>
</div>
          `
}

document.querySelector("#cards").innerHTML = `

    ${createCard('20/11', 'Domingo', createGame('qatar', "13:00", 'equador'))}

    ${createCard('21/11', 'Segunda', createGame('senegal', "13:00", 'holanda')
    + createGame('inglatera', "10:00", 'iran')
    + createGame('eua', "16:00", 'gales')
)}

    ${createCard('22/11', 'Terça', createGame('argentina', "07:00", 'arabiasaudita')
    + createGame('mexico', "13:00", 'polonia')
    + createGame('dinamarca', "10:00", 'tunisia')
    + createGame('franca', "16:00", 'australia')
)}

    ${createCard('23/11', 'Quarta', createGame('marrocos', "07:00", 'croacia')
    + createGame('espanha', "13:00", 'costarica')
    + createGame('alemanha', "10:00", 'japao')
    + createGame('belgica', "16:00", 'canada')
)}

    ${createCard('24/11', 'Quinta', createGame('suica', "07:00", 'camaroes')
    + createGame('uruguay', "10:00", 'coreiadosul')
    + createGame('portugal', "13:00", 'gana')
    + createGame('brazil', "16:00", 'serbia')
)}
 `