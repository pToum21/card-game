const cardBackImgPath = '/images/card-back-blue.png'
const cardContainerElem = document.querySelector('.card-container')
let cards = []
const playGameButtonElem = document.getElementById('playGame')
const collapsedGridAreaTemplate = '"a a" "a a"'
const cardCollectionCellClass = ".card-pos-a"

const cardObjectDefinitions = [
    { id: 1, imagePath: '/images/card-KingHearts.png' },
    { id: 2, imagePath: '/images/card-JackClubs.png' },
    { id: 3, imagePath: '/images/card-QueenDiamonds.png' },
    { id: 4, imagePath: '/images/card-AceSpades.png' }

]
loadGame()


function loadGame() {
    createCards()

    cards = document.querySelectorAll('.card')

    playGameButtonElem.addEventListener('click', () => startGame())

}
function startGame() {
    initializeNewGame()
    startRound()
}
function initializeNewGame() {

}
function startRound() {
    initializeNewRound()
    collectCards()
    flipCards(true)
}
function initializeNewRound() {

}

function collectCards() {
    transformGridArea(collapsedGridAreaTemplate)
    addCardsToGridAreaCell(cardCollectionCellClass)
}
function transformGridArea(areas) {
    cardContainerElem.style.gridTemplateAreas = areas
}
function addCardsToGridAreaCell(cellPositionClassName) {
    const cellPositionElem = document.querySelector(cellPositionClassName)

    cards.forEach((card, index) => {
        addChildElement(cellPositionElem, card)
    })
}

function flipCard(card, flipToBack) {
    const innerCardElem = card.firstChild

    if (flipToBack && !innerCardElem.classList.contains('flip-it')) {
        innerCardElem.classList.add('flip-it')
    } else if (innerCardElem.classList.contains('flip-it')) {
        innerCardElem.classList.remove('flip-it')
    }
}

function flipCards(flipToBack) {
    cards.forEach((card, index) => {
        setTimeout(() => {
            flipCard(card, flipToBack)
        }, index * 100)
    })
}

function suffleCards() {
    const id = setInterval(shuffle, 12)
    let shuffleCount = 0

    function shuffle() {
        if (shuffleCount == 500) {
            clearInterval(id)
        } else {
            shuffleCount++;
        }
    }
}

function createCards() {
    cardObjectDefinitions.forEach((cardItem) => {
        createCard(cardItem)
    })
}

function createCard(cardItem) {
    const cardElem = document.createElement('div')
    const cardInnerElem = document.createElement('div')
    const cardFrontElem = document.createElement('div')
    const cardBackElem = document.createElement('div')

    const cardFrontImg = document.createElement('img')
    const cardBackImg = document.createElement('img')

    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    addClassToElement(cardInnerElem, 'card-inner')

    addClassToElement(cardFrontElem, 'card-front')

    addClassToElement(cardBackElem, 'card-back')

    addSrcToTimageElement(cardBackImg, cardBackImgPath)

    addSrcToTimageElement(cardFrontImg, cardItem.imagePath)

    addClassToElement(cardBackImg, 'card-img')

    addClassToElement(cardFrontImg, 'card-img')

    addChildElement(cardFrontElem, cardFrontImg)

    addChildElement(cardBackElem, cardBackImg)

    addChildElement(cardInnerElem, cardFrontElem)

    addChildElement(cardInnerElem, cardBackElem)

    addChildElement(cardElem, cardInnerElem)

    addCardtoGridCell(cardElem)

}

function createElement(elemType) {
    return document.createElement(elemType)
}
function addClassToElement(elem, className) {
    elem.classList.add(className)
}
function addIdToElement(elem, id) {
    elem.id = id
}
function addSrcToTimageElement(imgElem, src) {
    imgElem.src = src
}
function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem)
}
function addCardtoGridCell(card) {
    const cardPositionClassName = mapCardIdtoGridCell(card)
    const cardPosElem = document.querySelector(cardPositionClassName)
    addChildElement(cardPosElem, card)
}
function mapCardIdtoGridCell(card) {
    if (card.id == 1) {
        return '.card-pos-a'
    }
    else if (card.id == 2) {
        return '.card-pos-b'
    }
    else if (card.id == 3) {
        return '.card-pos-c'
    }
    else if (card.id == 4) {
        return '.card-pos-d'
    }
}

