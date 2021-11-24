// WAR

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = []; //where cards are passed into
    }

    drawCard() { //This should work, test when able
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

    //Value map?

    

}

class Deck {
    constructor() {
        this.cards = [];
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    }

    getValue(card) {
        switch (card.value) { //Does card need to be defined?
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
            for (let v = 0; v < this.values.length; v++) {
                return this.cards.push(new Card(this.getValue(v), ` of ${this.suits[s]}`));
                //Do I have to call getValue() method? Yes to activate switch case
            }
        }
    }
    

    shuffleDeck() { //check math functions floor and random
        // create a copy of this.cards
        // loop that gets a random index of this.cards
        // push value from random index to shuffledCards array
        // this.cards = shuffledCards;

        //this.cards = shuffledCards;
        this.shuffledCards = [];
        let c = 52;
        let i;

        while (c) {
            c = Math.floor(Math.random() * c--);
            [this.cards[c], this.cards[i]] = [this.cards[i], this.cards[c]];
        }
        return this.shuffledCards.push(new Deck);

    }

    dealHand(player1, player2) {
        //Take deck that was just shuffled and deal 26 cards to each player

        //while cards still left in deck
        // player1.push(card);
        // player2.push(nextCard);

        //let hand = new Hand; //Didn't work
        for (let i = 0; i < this.shuffledCards.length; i++) { 
            return this.player1.hand.push(this.cards.pop()); //Says hand is undefined
            return this.player2.hand.push(this.cards.pop());
        } //Am I appropriately taking in the new deck I made on 122?

        //while (i < deck.cards.length) {
        //    player1.push(card);
        //    player2.push(nextCard);
        //}
    }
}

class PlayGame {
    //Rough order of logic
    //start(); //Taken care of in constructor of PlayGame
    //createPlayers(); //Taken care of in constructor of PlayGame
    //createDeck(); //Taken care of in constructor of PlayGame
    //shuffleDeck(); //Taken care of in Deck
    //dealHand(); //Passing in both players or once for each. Both is easier //Once for each player-26 cards each, 52 total  //Taken care of in constructor of PlayGame
    //drawCard(); //Call once for each player //Player class
    //compareCards(); //Draw and compare cards are done 26x //incrementScore() gets called as part of compareCards()
    //compareScore(); //Taken care of in PlayGame

    constructor() {
        this.player1 = new Player(prompt("Enter the name of player 1."));
        this.player2 = new Player(prompt("Enter the name of player 2."));
        this.deck = new Deck();
    }

    start() {
        this.deck.createDeck();
        this.deck.shuffleDeck();
        this.deck.dealHand(this.player1, this.player2); 
        this.compareCards(player1.drawCard(), player2.drawCard());
    }

    compareCards(card1, card2) {
        if (card1.value > card2.value) { //Must define card1 and card2
            this.player1.incrementScore();
        } else if (card2.value > card1.value) {
            this.player2.incrementScore();
        } else {
            alert("Tie");
        }
    }

    compareScore() {
        if (player1.score > player2.score) {
            //alert("Player 1 wins!");
            alert(`${player1} wins!`);
        } else if (player2.score > player1.score) {
            //alert("Player 2 wins!");
            alert(`${player2} wins!`);
        } else {
            alert("It's a tie!");
        }
    }

}

let play = new PlayGame;
play.start();

//DON'T FORGET UNIT TESTING!

//Notes
//Try to get each player's name to print in prompt. I already have prompt set up
