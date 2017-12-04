var cards =['queen' , 'queen' , 'king' , 'king'];
var cardsInPlay =[];
var cardOne, cardTwo;

cardOne = cards[0];
cardTwo = cards[1];

cardsInPlay.push(cardOne);
console.log('User flipped ' +cardsInPlay[0]);
cardsInPlay.push(cardTwo);
console.log('User flipped ' +cardsInPlay[1]);

if (cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert('You have a match!!!');
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("You don't have a match. Try again");
}
}