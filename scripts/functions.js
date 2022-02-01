const flipCard = (card) => {
    if(card.classList.contains('flipped'))
        return 0
    card.classList.add('flipped')

    roundCount++
    document.querySelector('p').innerText = roundCount
    
    console.log(flipped)
    if(flipped)
    {
        if(flipped.value === card.value)
            addPoint()
        else
            unflipCards([flipped, card])
        flipped = null
    }
    else
    {
        flipped = card
        console.log('flipped mudou para: ' + flipped)
    }
}

const unflipCards = (cards) => {
    cards[0].classList.remove('flipped')
    cards[1].classList.remove('flipped')
}

const addPoint = () => {
    points++
    let aopa = (points === cardCount)
    console.log(points, aopa, cardCount, typeof points, typeof cardCount)
    if(aopa)
        gameFinish()
}

const gameInitialize = () => {
    if(currentPlaying !== false)
        return 1
    currentPlaying = true

    const gameContainer = document.querySelector('section')
    cardCount = parseInt(prompt('Numero'))
    
    for(let i = 0; i < cardCount; i++){
        let card =  document.createElement('button')
        card.classList.add('card')
        card.setAttribute('value', 'teste')
        card.addEventListener('click', (e) => flipCard(e.currentTarget))
        gameContainer.appendChild(card)
        card =  document.createElement('button')
        card.classList.add('card')
        card.setAttribute('value', 'abobora')
        card.addEventListener('click', (e) => flipCard(e.currentTarget))
        gameContainer.appendChild(card)
    }
    
    roundCount = 0
    document.querySelector('p').innerText = roundCount

    points = 0
}

const gameFinish = () => {
    currentPlaying = false
    alert("é nois")
}