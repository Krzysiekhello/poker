class Croupier {
    constructor() {
      this.deck = ["2 żołądź", "3 żołądź", "4 żołądź", "5 żołądź", "6 żołądź", "7 żołądź", "8 żołądź", "9 żołądź", "10 żołądź", "Jopek żołądź", "Dama żołądź", "Król żołądź", "AS żołądź", "2 dzwonek", "3 dzwonek", "4 dzwonek", "5 dzwonek", "6 dzwonek", "7 dzwonek", "8 dzwonek", "9 dzwonek", "10 dzwonek", "Jopek dzwonek", "Dama dzwonek", "Król dzwonek", "AS dzwonek", "2 wino", "3 wino", "4 wino", "5 wino", "6 wino", "7 wino", "8 wino", "9 wino", "10 wino", "Jopek wino", "Dama wino", "Król wino", "AS wino", "2 czerwo", "3 czerwo", "4 czerwo", "5 czerwo", "6 czerwo", "7 czerwo", "8 czerwo", "9 czerwo", "10 czerwo", "Jopek czerwo", "Dama czerwo", "Król czerwo", "AS czerwo"]
      this.cards = this.fourCardsDraw();
    }

    
    fourCardsDraw() {
      const pcHand = [];
      const playerHand = [];
      const cardsDeck = [];
      for (let i = 0; i < 4; i++) {
        const index = Math.floor(Math.random() * this.deck.length);
        if (cardsDeck.includes(this.deck[index])) {
          
          i--
        } else {
          const card = this.deck[index];
          cardsDeck.push(card)
        }
      }
      console.log(cardsDeck)
      if (cardsDeck) {
        for (let i = 0; i < cardsDeck.length; i++) {
          const card = cardsDeck[i];
          if (i % 2 == 0) {
            playerHand.push(card);
            console.log(playerHand);
          } else {
            pcHand.push(card);
            console.log(pcHand);
          }
          
        }


      }
      
    
    }
  }

    


  





