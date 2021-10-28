class Player {
    constructor() {
        this.croupier = new Croupier
        this.playerCards = this.croupier.cards
    }
    one() {
        console.log(this.playerCards)
       
    }
}

const player = new Player
player.one()
