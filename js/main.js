var cards =['queen' , 'queen' , 'king' , 'king'];
var cardsInPlay =[];

var checkForMatch = function(){
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log('You have a match!!!');
			} else {
			console.log("You don't have a match. Try again");
				}
		}
	}

var flipCard = function (cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(0);
flipCard(2);

