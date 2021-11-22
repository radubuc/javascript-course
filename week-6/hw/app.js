// WAR

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = []; //where cards are passed into
    }

    drawCard() { //Pseudo code
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
        switch (card.value) {
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

    createDeck() { //Do I have to call getValue() method?
        for (let s = 0; s < suits.length; s++) {
            for (let v = 0; v < values.length; v++) {
                this.cards.push(new Card(j, ` of ${this.suits[i]}`));
            }
        }
    }
    

    shuffleDeck() { //check math functions floor and random
        // create a copy of this.cards
        // loop that gets a random index of this.cards
        // push value from random index to shuffledCards array
        this.cards = shuffledCards;

    }

    dealHand(player1, player2) {
        //while cars still left in deck
        // player1.push(card);
        // player2.push(nextCard);

        for (i = 0; i < deck.cards.length; i++) { //check middle term
             player1.push(card);
             player2.push(nextCard);
        }
    }
}

class PlayGame {
    //Rough order of logic
    //start(); //Taken care of in contstructor of PlayGame
    //createPlayers(); //Taken care of in contstructor of PlayGame
    //createDeck(); //Taken care of in contstructor of PlayGame
    //shuffleDeck(); //Taken care of in Deck
    //dealHand(); //Passing in both players or once for each. Both is easier //Once for each player-26 cards each, 52 total  //Taken care of in contstructor of PlayGame
    //drawCard(); //Call once for each player //Player class
    //compareCards(); //Draw and compare cards are done 26x //incrementScore() gets called as part of compareCards()
    //compareScore(); //Taken care of in PlayGame

    constructor() {
        this.player1 = new Player(prompt("Enter the name of player 1."));
        this.player2 = new Player(prompt("Enter the name of player 2."));
        this.deck = new Deck();
    }

    start() {
        this.deck.shuffle();
        this.deck.dealHand(player1, player2);
        this.compareCards(player1.drawCard(), player2.drawCard());
    }

    compareCards(card1, card2) {
        if (card1.value > card2.value) {
            this.player1.incrementScore();
        } else if (card2.value > card1.value) {
            this.player2.incrementScore();
        } else {
            alert("Tie");
        }
    }

    compareScore() {
        if (player1.score > player2.score) {
            alert("Player 1 wins!");
        } else if (player2.score > player1.score) {
            alert("Player 2 wins!");
        } else {
            alert("It's a tie!");
        }
    }

}


play.start(); //Why can't I start?

//DON'T FORGET UNIT TESTING!
