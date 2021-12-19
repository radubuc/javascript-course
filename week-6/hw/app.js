// WAR - WEEK 6 PROJECT

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = []; //where cards are passed into
    }

    drawCard() {
        return this.hand.pop(); //Draw once per player
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
        this.cards = [];
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    }

    switchValue(card) {
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
                this.cards.push(new Card(v, `${this.switchValue(v)} of ${this.suits[s]}`));
            }
        }
    }

    shuffleDeck() {
        // this.cards = this.cards.sort(() => Math.random() - 0.5);
        //Not as accurate on large scale, but good enough here

        //True random
        for (let i = this.cards.length - 1; i > 0; i--) {
    
            // Generate random number
            let j = Math.floor(Math.random() * (i + 1));

            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    dealHand(player1, player2) {
        //Take deck that was just shuffled and deal 26 cards to each player
        for (let i = 0; i < 26; i++) {
            player1.hand.push(this.cards.pop());
            player2.hand.push(this.cards.pop());
        } 
        //Console Logs for testing
        // console.log(player1.hand);
        // console.log(player2.hand);
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
    }

    start() {
        console.log("Let's play War!");
        const deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();
        deck.dealHand(this.player1, this.player2);
        this.compareCards(this.player1, this.player2);
        this.compareScore(this.player1, this.player2);
    }

    //Attempt 3
    compareCards() {
        for (let r = 0; r < 26; r++) {
            let card1 = this.player1.drawCard();
            let card2 = this.player2.drawCard();

            //Console logs for testing
            // console.log(this.player1.drawCard());
            // console.log(this.player2.drawCard());

            if (card1.value > card2.value) {
                console.log(`${this.player1.name}'s ${card1.suit} beats ${this.player2.name}'s ${card2.suit}`);
                this.player1.incrementScore();
            } else if (card2.value > card1.value) {
                console.log(`${this.player2.name}'s ${card2.suit} beats ${this.player1.name}'s ${card1.suit}`);
                this.player2.incrementScore();
            } else {
                console.log(`${this.player1.name}'s ${card1.suit} and ${this.player2.name}'s ${card2.suit} tie!`);
            }
        } 
    }

    compareScore() {
        if (this.player1.score > this.player2.score) {
            alert(`${this.player1.name} wins! - Final score: ${this.player1.score} to ${this.player2.score}`);
        } else if (this.player2.score > this.player1.score) {
            alert(`${this.player2.name} wins! - Final score: ${this.player2.score} to ${this.player1.score}`);
        } else {
            alert(`${this.player1.name} and ${this.player2.name} tie!`);
        }
    }

}

let play = new PlayGame;
play.start();

