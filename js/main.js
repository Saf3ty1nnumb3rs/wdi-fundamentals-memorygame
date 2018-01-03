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
	 //contrary to GA instructions, inserting code here causes failure -this may be due to an error of my own earlier on (?)
			if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You have a match!!!');
			} else {
			alert("You don't have a match. Try again");
				}
		}

var flipCard = function (){
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
    //for some reason this needs to be outside of checkForMatch() - error related to cardId
	checkForMatch();
	}
}

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
		document.getElementById("game-board").appendChild(cardElement);
	}
}
var board = document.getElementById('game-board'); //creates 'game-board' as var - now able to append, etc
var resetGame = function (){
	while(board.hasChildNodes()){
		board.removeChild(board.firstChild);
	}
	cardsInPlay = []; //remove cardsInPlay
	createBoard(); //make fresh board
}
createBoard();

