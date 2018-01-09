var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds" ,
	cardImage: "images/king-of-diamonds.png",
}
];
var cardsInPlay =[];
var checkForMatch = function(){
		//delay alert until after card flip
		setTimeout (function(){
			if (cardsInPlay.length === 2){
				if (cardsInPlay[0] === cardsInPlay[1]) {
					alert('You have a match!!!');
				} else {
					alert("You don't have a match. Try again");
					}
				}
			} , 300);
		}

var flipCard = function (){
	//the following exits the function if 2 cards already flipped
	if (cardsInPlay.length === 2) {
			return;
			}

	var cardId = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	//console.log("User flipped " + cards[cardId].rank);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
	//Below removes Event Listener so you can't double-click and get a match
	this.removeEventListener('click', flipCard);
	checkForMatch();

}
var board = document.getElementById('game-board');
var createBoard = function (){
	//set standard "for"
	for (var i = 0; i < cards.length; i++){
		//create cardElement as DOM element
		var cardElement = document.createElement('img');
		//assign attributes
		cardElement.setAttribute('src' , 'images/back.png');
		cardElement.setAttribute('data-id' , i);
		cardElement.addEventListener('click' , flipCard);
		// add card for each value in array
		board.appendChild(cardElement);
	}
}

var resetGame = function (){
	while(board.hasChildNodes()){
		board.removeChild(board.firstChild);
	}
	cardsInPlay = []; //remove cardsInPlay
	createBoard(); //make fresh board
}
createBoard();

