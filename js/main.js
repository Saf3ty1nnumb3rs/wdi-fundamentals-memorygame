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
				if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
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
	if (cardsInPlay.length === 0){
		this.setAttribute('index' , 0);
	}	else {
		this.setAttribute('index' , 1);
	}
	var cardId = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId]);
	this.setAttribute('src', cards[cardId].cardImage);
	//console.log("User flipped " + cards[cardId].rank);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
	//Below removes Event Listener so you can't double-click and get a match
	this.removeEventListener('click', flipCard);
	this.addEventListener('click', resetCard);
	checkForMatch();
}

var resetCard = function () {
	var idx = this.getAttribute('index');
	if (cardsInPlay.length === 2) {
	cardsInPlay.splice(idx, 1);
    } else {
    	cardsInPlay.pop();
    }

	//make sure cIP is populated correctly
	console.log(cardsInPlay);
	this.setAttribute('src' , 'images/back.png');
	this.removeEventListener('click', resetCard, false);
	this.addEventListener('click' , flipCard, false);

}
//Brilliant!!!
var shuffle = function(array){
  var i = 0,
      j = 0,
      temp = null;
  for (i = array.length -1; i > 0; i -=1){
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
var board = document.getElementById('game-board');
var createBoard = function (){
	//set standard "for"
	for (i = 0 ; i < cards.length ; i++){
		//create cardElement as DOM element
		var cardElement = document.createElement('img');
		//assign attributes
		cardElement.setAttribute('src' , 'images/back.png');
		cardElement.setAttribute('data-id' , i);
		cardElement.addEventListener('click' , flipCard, false);
		// add card for each value in array
		board.appendChild(cardElement);
		}
	// randomize card location AFTER attributes assigned
	shuffle(cards);
	//console.log(cards);
}
var resetGame = function () {
	board.innerHTML = "";
	cardsInPlay = [];
	createBoard();
}
/* var resetGame = function (){
	while(board.hasChildNodes()){
		board.removeChild(board.firstChild);
	}
	cardsInPlay = []; //remove cardsInPlay
	createBoard(); //make fresh board
} */
createBoard();

