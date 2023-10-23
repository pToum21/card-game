const cardObjectDefinitions = [
    { id: 1, imagePath: '/images/card-KingHearts.png' },
    { id: 2, imagePath: '/images/card-JackClubs.png' },
    { id: 3, imagePath: '/images/card-QueenDiamonds.png' },
    { id: 4, imagePath: '/images/card-AceSpades.png' }

]

const cardBackImgPath = '/images/card-back-blue.png'
const cardContainerElem = document.querySelector('.card-container')

createCards();

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

