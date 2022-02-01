const gameContainer = document.querySelector('section')

const cardCount = 12


for(let i = 0; i < cardCount; i++){
    let card =  document.createElement('div')
    card.classList.add('card')
    card.addEventListener('click', (e) => flipCard(e.currentTarget))
    gameContainer.appendChild(card)
}