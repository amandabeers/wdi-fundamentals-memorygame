var cards = [
{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "images/queen-of-hearts.png"
}, 
{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "Diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function checkForMatch() {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');

	if (cardsInPlay.length === 0) {
		cardsInPlay.push(cards[cardId]);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
	} else if (cards[cardId].cardImage !== cardsInPlay[0].cardImage) {
		cardsInPlay.push(cards[cardId]);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
	} else {
		alert("Please choose a face down card.");
	}
	
	this.setAttribute('src', cards[cardId].cardImage);
	
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

function resetBoard() {
	for (var i = 0; i < cards.length; i++) {
		var flippedCard = document.getElementById('game-board').children[i]
		flippedCard.setAttribute('src', 'images/back.png');
	}
	cardsInPlay =[];
}

var resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetBoard);

createBoard();