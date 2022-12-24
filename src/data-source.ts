import "reflect-metadata"
import { DataSource } from "typeorm"
import { FlashCardDeck } from "./entity/FlashCardDeck"
import { FlashCard } from "./entity/FlashCard"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    database: "quiz_time",
    synchronize: true,
    logging: true,
    entities: [FlashCardDeck, FlashCard],
    migrations: [__dirname + "/migration/*.js"],
})
