// WAR

class Player {
    constructor() {
        //this.name = name;
        this.player1 = player1;
        this.player2 = player2;
        this.score = score;
        this.hand = [];
    }

    dealHand() { //Pseudo code, maybe no push
        player1.hand.push([hand]);
        player2.hand.push([hand]);
    }

    drawCard() { //Pseudo code
        player1.hand ?
        player2.hand ?
    }

    compareScore() {
        if (player1.score > player2.score) {
            player1.incrementScore();
        } else if (player2.score > player1.score) {
            player2.incrementScore();
        } else {
            return "Tie!";
        }
    }

    incrementScore() {
        this.score += 1;
    }


}

let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let suit = ["clubs", "diamonds", "heart", "spade"];

switch (card) { //Switch is for cpu, not what prints outs   Something about case card.value1?
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

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }

    //Value map?

    

}

class Deck {
    constructor() {
        this.card = card; //Should this be an array instead?
        this.deck = deck;
    }

    createDeck() {

    }

    shuffleDeck() {

    }
}

class PlayGame {
    //Rough order of logic
    //start();
    //createDeck();
    //shuffleDeck();
    //dealHand();
    //drawCard(); //Call once for each player
    //compareScore(); //incrementScore() gets called as part of compareScore()
    //findWinnerOfRound();
    //findWinner();

    findWinnerOfRound() { //Pseudo code - how to find player total for each round?
        if (player1.draw > player2.draw) {
            return "Player 1 wins the round!";
        } else if (player2.draw > player1.draw) {
            return "Player 2 wins the round!";
        } else {
            return "It's a tie!";
        }
    }

    findWinner() { //Pseudo code - how to find player total for whole game?
        if (player1.total > player2.total) {
            return "Player 1 wins the game!";
        } else if (player2.total > player1.total) {
            return "Player 2 wins the game!";
        } else {
            return "It's a tied game!";
        }
    }
}

play.start();

//DON'T FORGET UNIT TESTING!
