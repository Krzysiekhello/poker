class Croupier {
    constructor(wysokosc, szerokosc) {
      this.deck = ["As", "Jopel", "Dama"]
    }
    draw() {
        const index = Math.floor(Math.random() * this.deck.length);
        const card = this.deck[index];
        return card
    }
}

  const test = new Croupier
  test.draw() 