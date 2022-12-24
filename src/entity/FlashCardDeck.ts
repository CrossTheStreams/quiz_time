import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { FlashCard } from "./FlashCard"

@Entity()
export class FlashCardDeck {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", {length: 200})
    name: string

    @Column("varchar", { length: 1000 })
    description: string

    @OneToMany(() => FlashCard, (card) => card.deck)
    cards: FlashCard[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}
