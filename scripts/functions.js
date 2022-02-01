const flipCard = (card) => {
    card.classList.toggle('flipped')
}

const gameInitialize = () => {
    if(currentPlaying !== false)
        return 1

    const gameContainer = document.querySelector('section')
    const cardCount = prompt('Numero')

    for(let i = 0; i < cardCount; i++){
        let card =  document.createElement('div')
        card.classList.add('card')
        card.addEventListener('click', (e) => flipCard(e.currentTarget))
        gameContainer.appendChild(card)
    }
}