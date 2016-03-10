export class Card {
	suit;
	value;

	activate(model) {
		if (model) {
			this.value = model.value;
			this.suit = model.suit;
		}
	}
}