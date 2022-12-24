import "reflect-metadata"
import { AppDataSource } from "./data-source"
import { FlashCardDeck } from "./entity/FlashCardDeck"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new FlashCardDeck into the database...")
    const deck = new FlashCardDeck()
    deck.name = "First Card Deck"
    deck.description = "The combined wisdom of Jason Dion, legendary keeper of all cyber security wisdom and knowledge."
    await AppDataSource.manager.save(deck)
    console.log("Saved a new FlashCardDeck with id: " + deck.id)

    console.log("Loading FlashCardDecks from the database...")
    const decks = await AppDataSource.manager.find(FlashCardDeck)
    console.log("Loaded FlashCardDecks: ", decks)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
