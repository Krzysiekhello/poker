class Player {
    constructor() {
        this.croupier = new Croupier
        this.card  = this.croupier.drawCards()
    }
    one() {
        console.log(this.card);
    }
}

const player = new Player
player.one()
