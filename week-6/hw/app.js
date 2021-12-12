// WAR - WEEK 6 PROJECT

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = []; //where cards are passed into
    }

    drawCard() { //This should work, test when able
        //for (let i = 0; i < 26; i++) {
            return this.hand.pop(); //Draw once per player
        //}
        
    }

    incrementScore() {
        this.score += 1;
    }
}

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    getValue() {
        return this.value;
    }

}

class Deck {
    constructor() {
        this.cards = []; //Does deck understand what card is?
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    }

    switchValue(card) { //Is switch case being read properly?
        switch (card) {
            case 2:
                return "Two";
                break;

            case 3:
                return "Three";
                break;

            case 4:
                return "Four";
                break;

            case 5:
                return "Five";
                break;

            case 6:
                return "Six";
                break;

            case 7:
                return "Seven";
                break;

            case 8:
                return "Eight";
                break;

            case 9:
                return "Nine";
                break;

            case 10:
                return "Ten";
                break;

            case 11:
                return "Jack";
                break;

            case 12:
                return "Queen";
                break;

            case 13:
                return "King";
                break;

            case 14:
                return "Ace";
                break;

        }
    }

    createDeck() {
        for (let s = 0; s < this.suits.length; s++) {
            for (let v = 2; v < this.values.length + 2; v++) {
                this.cards.push(new Card(this.switchValue(v), ` of ${this.suits[s]}`)); //Do I need values array instead of switch value?
            }
        }
    }

    shuffleDeck() {
        this.cards = this.cards.sort(() => Math.random() - 0.5); //Not as accurate on large scale, but good enough here
    }

    //shuffleDeck() { //check math functions floor and random
    //    // create a copy of this.cards
    //    // loop that gets a random index of this.cards
    //    // push value from random index to shuffledCards array
    //    // this.cards = shuffledCards;

    //    //this.cards = shuffledCards;
    //    const { cards } = this;
    //    let c = 52;
    //    let i;

    //    while (c) {
    //        c = Math.floor(Math.random() * c--);
    //        [cards[c], cards[i]] = [cards[i], cards[c]];
    //    }
    //    console.log(this);
    //    return this;
    //}

    dealHand(player1, player2) {
        //Take deck that was just shuffled and deal 26 cards to each player

        //while cards still left in deck
        // player1.push(card);
        // player2.push(nextCard);

        //let deckLength = this.cards.length;
        for (let i = 0; i < 26; i++) {
            player1.hand.push(this.cards.pop());
            player2.hand.push(this.cards.pop());
        } 
        console.log(player1.hand); //Why is this relient on my first compareCards() method?
        console.log(player2.hand);
    }
}

class PlayGame {
    //Rough order of logic
    //start(); //Taken care of in constructor of PlayGame
    //createPlayers(); //Taken care of in constructor of PlayGame
    //createDeck(); //Taken care of in constructor of PlayGame and in Deck class
    //shuffleDeck(); //Taken care of in Deck
    //dealHand(); //Passing in both players or once for each. Both is easier //Once for each player-26 cards each, 52 total  //Taken care of in constructor of PlayGame
    //drawCard(); //Call once for each player //Player class
    //compareCards(); //Draw and compare cards are done 26x //incrementScore() gets called as part of compareCards()
    //compareScore(); //Taken care of in PlayGame

    constructor() {
        this.player1 = new Player(prompt("Enter the name of player 1."));
        this.player2 = new Player(prompt("Enter the name of player 2."));
        //this.deck = new Deck();
    }

    start() {
        const deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();
        deck.dealHand(this.player1, this.player2);
        //this.compareCards(this.player1.drawCard(), this.player2.drawCard());
        this.compareCards(this.player1, this.player2);
        this.compareScore(this.player1, this.player2);
    }

    //Attempt 3
    compareCards() { //ALL ROUNDS END IN TIE - LOGIC ERROR
        for (let r = 0; r < 52; r++) {
            let card1 = this.player1.drawCard();
            let card2 = this.player2.drawCard();

            console.log(this.player1.drawCard());
            console.log(this.player2.drawCard());

            if (card1 > card2) {
                this.player1.incrementScore();
            } else if (card2 > card1) {
                this.player2.incrementScore();
            } else {
                console.log("Tie");
            }

            //if (card1.getValue() > card2.getValue()) {
            //    this.player1.incrementScore();
            //} else if (card2.getValue() > card1.getValue()) {
            //    this.player2.incrementScore();
            //} else {
            //    console.log("Tie");
            //}
        } 
    }

    //Attempt 1
    //compareCards(card1, card2) { //ALL ROUNDS END IN TIE - LOGIC ERROR
    //    for (let r = 0; r < 26; r++) {
    //        console.log(this.player1.drawCard());
    //        console.log(this.player2.drawCard());

    //        if (card1 > card2) {
    //            this.player1.incrementScore();
    //        } else if (card2 > card1) {
    //            this.player2.incrementScore();
    //        } else {
    //            console.log("Tie");
    //        }
    //    }
    //}

    //Attempt 2
    //compareCards(card1, card2) {
    //    for (let r = 0; r < 26; r++) {
    //        let card1 = this.player1.drawCard();
    //        let card2 = this.player2.drawCard();

    //        console.log(this.player1.drawCard());
    //        console.log(this.player2.drawCard());

    //        if (card1 > card2) {
    //            this.player1.incrementScore();
    //            //console.log(this.player1.score);
    //        } else if (card2 > card1) {
    //            this.player2.incrementScore();
    //        } else {
    //            console.log("Tie");
    //        }
    //    }
    //}

    compareScore() {
        if (this.player1.score > this.player2.score) {
            //alert("Player 1 wins!");
            alert(`${this.player1} wins!`);
        } else if (this.player2.score > this.player1.score) {
            //alert("Player 2 wins!");
            alert(`${this.player2} wins!`);
        } else {
            alert("It's a tie!");
        }
    }

}

let play = new PlayGame;
play.start();

//DON'T FORGET UNIT TESTING!

//Notes
//Try to get each player's name to print in alert. I already have prompt set up
