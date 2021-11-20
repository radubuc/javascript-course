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
        this.suits = ["clubs", "diamonds", "heart", "spade"];
    }

    getWord(card) {
        switch (card.value) { //Switch is for cpu, not what prints outs   Something about case card.value1?
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

    shuffleDeck() { //check math functions
        // create a copy of this.cards
        // loop that gets a random index of this.cards
        // push value from random index to shuffledCards array
        this.cards = shuffledCards;

    }

    dealHand(player1, player2) {
        //while cars still left in deck
        // player1.push(card);
        // player2.push(nextCard);
    }
}

class PlayGame {
    //Rough order of logic
    //start(); //Taken care of in contstructor of PlayGame
    //createPlayers(); //Taken care of in contstructor of PlayGame
    //createDeck(); //Taken care of in contstructor of PlayGame
    //shuffleDeck(); //Taken care of in Deck
    //dealHand(); //Passing in both players or once for each. Both is easier //Taken care of in contstructor of PlayGame
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
        this.compareCards(player1.drawCard(), player2.drawCard())
    }

    compareCards(card1, card2) {
        if (card1.value > card2.value) {
            this.player1.incrementScore();
        } else if (card2.value > card1.value) {
            this.player2.incrementScore();
        } else {
            console.log("Tie!");
        }
    }

    compareScore() {
        if (player1.score > player2.score) {
            /*player1.incrementScore();*/
        } else if (player2.score > player1.score) {
            /*player2.incrementScore();*/
        } else {
            return "Tie!";
        }
    }

}


//play.start();

//DON'T FORGET UNIT TESTING!
