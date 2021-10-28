class Player extends Croupier {
    constructor() {
        super()
        this.cards = super.deck
    }
    one() {
        console.log(this.cards)
    }
}

const player = new Player
player.one()
