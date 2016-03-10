export class App {
	cards = [];

	newCard() {
		this.cards.push(generateCard());
	}
}

function generateCard() {
    let cardValues = ['2','3','4','5','6','7','8','9','10',
        'J','Q','K','A'];

    let cardSuits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];

    function pickRandomItem(arr) {
        let index = Math.floor(Math.random() * (arr.length));
        return arr[index];
    }

    return {
        suit: pickRandomItem(cardSuits),
        value: pickRandomItem(cardValues)
    };
}