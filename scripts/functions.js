const flipCard = (card) => {
    if(card.classList.contains('flipped'))
        return 0
    card.classList.add('flipped')

    roundCount++
    document.querySelector('#counter').innerText = roundCount
    
    if(flipped)
    {
        if(flipped.value === card.value)
            addPoint()
        else
            setTimeout((a) => unflipCards(a), 1000, [flipped, card])
        flipped = null
    }
    else
    {
        flipped = card
    }
}

const unflipCards = (cards) => {
    cards[0].classList.remove('flipped')
    cards[1].classList.remove('flipped')
}

const addPoint = () => {
    if(++points === (cardCount/2))
        gameFinish()
}

const gameInitialize = () => {
    if(currentPlaying !== false)
        return 1
    currentPlaying = true

    const gameContainer = document.querySelector('section')

    do {
        cardCount = parseInt(prompt('Numero'))
    } while (validateCardCount(cardCount))

    let array = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn']
    array = array.slice(0, cardCount/2)
    array = array.concat(array)
    array = array.sort(() => {return Math.random() - 0.5})
    
    for(let i = 0; i < cardCount; i++){
        let card = document.createElement('button')
        card.classList.add('card')
        card.setAttribute('value', array[i])
        card.addEventListener('click', (e) => flipCard(e.currentTarget))

        let back = document.createElement('img')
        back.classList.add('back')
        back.setAttribute('src',`public/${array[i]}parrot.gif`)

        let front = document.createElement('img')
        front.setAttribute('src', 'public/front.png')

        card.appendChild(front)
        card.appendChild(back)
        gameContainer.appendChild(card)
    }
    
    roundCount = 0
    document.querySelector('#counter').innerText = roundCount
    clock()

    points = 0
}

const gameFinish = () => {
    currentPlaying = false
    clock()
    alert("é nois")
}

const validateCardCount = (number) => {

    const isEven = (number % 2 === 0)
    const isValid = (number >= 4 && number <= 14)

    return !(isEven && isValid)
}

const clock = () => {
    if (now !== null){
        document.querySelector('#clock').innerText = `${(Date.now() - now)/1000} segundos`
        now = null
    } else
        now = Date.now()
}