class Croupier {
    constructor() {
      this.deck = ["As", "Jopel", "Dama"]
    }
    drawCards() {
      const cardsDeck = []
      for (let i = 0; i < this.deck.length - 1; i++) {
        const index = Math.floor(Math.random() * this.deck.length);
        if (cardsDeck.includes(this.deck[index])) {
          i--
        } else {
          const card = this.deck[index];
          cardsDeck.push(card)
        }
      }
      return cardsDeck
    }
}
