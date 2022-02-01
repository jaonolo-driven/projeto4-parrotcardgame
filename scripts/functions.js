const flipCard = (card) => {
    if(card.classList.contains('flipped'))
        return 0
    card.classList.add('flipped')

    roundCount++
    document.querySelector('p').innerText = roundCount
    
    // if(flipped)
    //     checkFlipped()
    // flipped
}

const gameInitialize = () => {
    if(currentPlaying !== false)
        return 1
    currentPlaying = true

    const gameContainer = document.querySelector('section')
    const cardCount = prompt('Numero')
    
    for(let i = 0; i < cardCount; i++){
        let card =  document.createElement('div')
        card.classList.add('card')
        card.addEventListener('click', (e) => flipCard(e.currentTarget))
        gameContainer.appendChild(card)
    }
    
    roundCount = 0
    document.querySelector('p').innerText = roundCount
}