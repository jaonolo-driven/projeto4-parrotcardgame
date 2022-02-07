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

        let back = document.createElement('div')
        back.classList.add('back')

        let backImg = document.createElement('img')
        backImg.setAttribute('src',`public/${array[i]}parrot.gif`)
        back.appendChild(backImg)

        let front = document.createElement('div')
        front.classList.add('front')

        let frontImg = document.createElement('img')
        frontImg.setAttribute('src', 'public/front.png')
        front.appendChild(frontImg)

        card.appendChild(front)
        card.appendChild(back)
        gameContainer.appendChild(card)
    }
    
    roundCount = 0
    document.querySelector('#counter').innerText = roundCount
    clock(0)

    points = 0
}

const gameFinish = () => {
    currentPlaying = false
    alert("é nois")
    if (prompt('Que dnv?') === 'sim') {
        gameInitialize()
    }
}

const validateCardCount = (number) => {

    const isEven = (number % 2 === 0)
    const isValid = (number >= 4 && number <= 14)

    return !(isEven && isValid)
}

// Implementado com ajuda do @bettoalsur
const clock = (a) => {
    if (currentPlaying){
        let minutes = a/60 >= 1 ? `${parseInt(a/60)}min` : '' 
        let seconds = `${a%60}s`

        document.querySelector('#clock').innerText = minutes + ' ' + seconds
        setTimeout((a) => {
            clock(a)
        }, 1000, a + 1)
    }
}