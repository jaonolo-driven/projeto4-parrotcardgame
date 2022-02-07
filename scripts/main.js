const cardOptions = [
    {
        value: 'bobross',
        src: 'public/bobrossparrot.gif'
    }, 
    {
        value: 'explody',
        src: 'public/explodyparrot.gif'
    },
    { 
        value: 'fiesta',
        src: 'public/fiestaparrot.gif'
    },
    { 
        value: 'metal',
        src: 'public/metalparrot.gif'
    },
    { 
        value: 'revertit',
        src: 'public/revertitparrot.gif'
    },
    { 
        value: 'triplets',
        src: 'public/tripletsparrot.gif'
    },
    { 
        value: 'unicorn',
        src: 'public/unicornparrot.gif'
    }
]

let currentPlaying = false
let roundCount = 0
let cardCount = 0
let flipped = null
let points = 0
let timeSpent = 0

gameInitialize()