function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
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

    ${createCard('24/11', 'Quinta', createGame('suica', "07:00", 'camaroes')
    + createGame('portugal', "13:00", 'gana')
    + createGame('brazil', "16:00", 'serbia')
)}
    ${createCard('28/11', 'Segunda', createGame('suica', "13:00", 'brazil'))}
    ${createCard('02/12', 'Sexta', createGame('brazil', "16:00", 'camaroes'))}    
 `