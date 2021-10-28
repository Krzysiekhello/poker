class Cpu {
    constructor() {
        this.croupier = new Croupier
        this.CpuCards = this.croupier.cards
    }
    one() {
        console.log(this.CpuCards);
    }
}
const cpu = new Cpu
cpu.one()
