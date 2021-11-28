// UNIT TESTING FOR WAR PROJECT

var expect = chai.expect;

describe("MyFunctions", function () {
    describe("#createDeck", function () {
        it("should create a standard deck of 52 playing cards", function () {
            const deck = new Deck(); //Create new deck
            deck.createDeck();
            let numCards = deck.length; //Tell test how many cards should be in deck
            expect(numCards).to.have.a.lengthOf(52);
        });

        it("should throw an error if deck is not created", function () {
            expect(function () {
                createDeck(53); //Pass in an intentionally wrong answer to see if code fails properly
            }).to.throw(Error);
        });

    });
});