import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { FlashCardDeck } from "./FlashCardDeck"

@Entity()
export class FlashCard {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", {length: 2000})
    front: string

    @Column("varchar", { length: 2000 })
    back: string

    @ManyToOne(() => FlashCardDeck, (deck) => deck.cards)
    deck: FlashCardDeck

    @Column("timestamptz")
    hiddenUntil: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
