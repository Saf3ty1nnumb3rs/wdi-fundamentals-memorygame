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
var playerScore = 0;
var dealerScore = 0;

var checkForMatch = function(){
//alert generates before card flips - delay alert until after card flip
	setTimeout (function(){
		if (cardsInPlay.length === 2){

			if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
				playerScore = playerScore += 1;
				document.querySelector("#player").innerHTML = playerScore;
				document.querySelector("#dealer").innerHTML = dealerScore;
				alert("You have a match!!!");
				//console.log(playerScore, dealerScore);
			} else {
				dealerScore = dealerScore += 1;
				document.querySelector("#player").innerHTML = playerScore;
				document.querySelector("#dealer").innerHTML = dealerScore;
				alert("You don't have a match. Try again");
				//console.log(playerScore, dealerScore);
			}
		}
	} , 300);
}

var flipCard = function (){
	//the following exits the function if 2 cards already flipped
	if (cardsInPlay.length === 2) {
		return;
	}
	// sets index reference for selected cards
	if (cardsInPlay.length === 0){
		this.setAttribute("index" , 0);
	}	else {
		this.setAttribute("index" , 1);
	}
	// get attribute for card identification
	var cardId = this.getAttribute("data-id");
	this.setAttribute("src", cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId]);
	//console.log("User flipped " + cards[cardId].rank);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
	//Below removes Event Listener so you can't click twice and get a match
	this.removeEventListener("click", flipCard);
	//add eventListener so you are able to flip back over
	this.addEventListener("click", resetCard);
	checkForMatch();
}
// function to flip face up card back over
var resetCard = function () {
	//retrieve index value in order to remove card from cIP array
	var idx = this.getAttribute("index");
	if (cardsInPlay.length === 2) {
		cardsInPlay.splice(idx, 1);
	} else {
		cardsInPlay.pop();
	}

	//make sure cIP is populated correctly
	//console.log(cardsInPlay);
	//reassign img attribute
	this.setAttribute("src" , "images/back.png");
	//remove resetCard eventListener
	this.removeEventListener("click", resetCard, false);
	// reinstate flipCard eventListener
	this.addEventListener("click" , flipCard, false);

}
//Brilliant!!! Not my work though... :(
//Reassigns location within the array and effectively shuffles the "deck"
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
//create variable for DOM element game-board
var board = document.getElementById("game-board");
//distribute cards in DOM
var createBoard = function (){
	//set standard "for"
	for (i = 0 ; i < cards.length ; i++){
		//create cardElement as DOM element
		var cardElement = document.createElement("img");
		//assign attributes
		cardElement.setAttribute("src" , "images/back.png");
		cardElement.setAttribute("data-id" , i);
		cardElement.addEventListener("click" , flipCard, false);
		// add card for each value in array within 'game-board'
		board.appendChild(cardElement);
	}
	// randomize card location AFTER attributes assigned
	shuffle(cards);
}
//Easy resetGame function - wipe the HTML in 'game-board'
var resetGame = function () {
	board.innerHTML = "";
	cardsInPlay = [];
	createBoard();
}
//more involved resetGame function
/* var resetGame = function (){
	while(board.hasChildNodes()){
		board.removeChild(board.firstChild);
	}
	cardsInPlay = []; //remove cardsInPlay
	createBoard(); //make fresh board
} */

//Errr...remove your losing score vs. the "dealer"
var resetScore = function() {
	//set both variables back to 0
	playerScore = 0;
	dealerScore = 0;
	//get elements and replace HTML values
	document.querySelector("#player").innerHTML = playerScore;
	document.querySelector("#dealer").innerHTML = dealerScore;
	//console.log(playerScore, dealerScore);
}

//add animated sidebar navigation
var sideBar = document.querySelector("#memorySidebar");
var dropDown = document.querySelector("#aboutAcc");
var caret = document.querySelector("#caret");
//dropdown toggle
var accDrop = function () {
	    dropDown.classList.toggle("hide");
	caret.classList.toggle("fa-caret-down");
}

var barOpen = function() {
	//display CSS styles with animation
	sideBar.style.display = "block";
	sideBar.classList.add("animate-right");
	//remove left animation if previously added
	if(sideBar.classList.contains("animate-left")){
		sideBar.classList.remove("animate-left");
	} else {
		return
	}
}

var barClose = function() {
	//remove CSS right animation
	sideBar.classList.remove("animate-right");
	//delay left animation in order to execute
  		setTimeout(function(){
		sideBar.classList.add("animate-left");

	}, 100);
  	//delay deletion of display until animation completes
 		setTimeout(function(){
		sideBar.style.display = "none";
	},500);
}
//initialize your board
createBoard();

