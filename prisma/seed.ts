import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  const deck = await prisma.flashCardDeck.create({
    data: {
      title: "My First Flashcard Deck",
      description: "This is the very first one."
    }
  })
  const firstCard = await prisma.flashCard.create({
    data: {
      front: "How many licks DOES it take to get to the center of a Tootsie-Pop??",
      back: "The world may never know",
      flashCardDeckId: deck.id
    }
  })
  const secondCard = await prisma.flashCard.create({
    data: {
      front: "The capital of Assyria",
      back: "I don't know that.",
      flashCardDeckId: deck.id
    }
  })
  const thirdCard = await prisma.flashCard.create({
    data: {
      front: "The answer to life, the universe, and everything",
      back: "42",
      flashCardDeckId: deck.id
    }
  })
}

seed()
  .then(async () => {
    console.log("SEEDED DB")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })