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
    gameContainer.innerHTML = null

    timeSpent = 0

    do {
        cardCount = parseInt(prompt(`Quantas cartas você deseja? (números pares de 4 à ${2*cardOptions.length})`))
    } while (validateCardCount(cardCount))

    let array = []
    array = cardOptions.slice(0, cardCount/2)
    array = array.concat(array)
    array = array.sort(() => {return Math.random() - 0.5})
    
    for(let i = 0; i < cardCount; i++){
        let card = document.createElement('button')
        card.classList.add('card')
        card.setAttribute('value', array[i].value)
        card.setAttribute("data-identifier", "card")
        card.addEventListener('click', (e) => flipCard(e.currentTarget))

        let back = document.createElement('div')
        back.classList.add('back')
        back.setAttribute("data-identifier", "back-face")

        let backImg = document.createElement('img')
        backImg.setAttribute('src', array[i].src)
        back.appendChild(backImg)

        let front = document.createElement('div')
        front.classList.add('front')
        front.setAttribute("data-identifier", "front-face")

        let frontImg = document.createElement('img')
        frontImg.setAttribute('src', 'public/front.png')
        front.appendChild(frontImg)

        card.appendChild(front)
        card.appendChild(back)
        gameContainer.appendChild(card)
    }
    
    roundCount = 0
    document.querySelector('#counter').innerText = roundCount
    
    currentClock = clock()
    points = 0
}

const gameFinish = () => {
    currentPlaying = false
    clearInterval(currentClock)
    alert(`Você ganhou em ${roundCount} jogadas e em ${timeSpent - 1} segundos!`)
    if (prompt('Quer jogar novamente? (sim ou não)') === 'sim') {
        gameInitialize()
    }
}

const validateCardCount = (number) => {
    const isEven = (number % 2 === 0)
    const isValid = (number >= 4 && number <= 2*cardOptions.length)

    return !(isEven && isValid)
}

// menções honrosas: @bettoalsur e 
const clock = () => {
    document.querySelector('#clock').innerText = timeSpent + 's'
    timeSpent++
    return setInterval(() => {
        document.querySelector('#clock').innerText = timeSpent + 's'
        timeSpent++
    }, 1000)
}