import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { createYoga, createSchema } from 'graphql-yoga'

const prisma = new PrismaClient();

const typeDefs = `
type FlashCardDeck {
  id: Int! 
  title: String!
  description: String!
  flashCards: [FlashCard]!
  createdAt: DateTime!
  updatedAt: DateTime!
} 
type FlashCard {
  id: Int!
  flashCardDeck: FlashCardDeck!
  hiddenUntil: DateTime
  front: String!
  back: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}
type Query {
  findById(id: Int): FlashCardDeck!
  allDecks: [FlashCardDeck]!
}
scalar DateTime
`

const resolvers = {
  Query: {
    findById: async (parent, args, contextValue, info) => {
      const deck = await prisma.flashCardDeck.findFirst({
        where: {id: args.id},
        include: {flashCards: true}
      })
      return deck
    },
    allDecks: () => {
      return prisma.flashCardDeck.findMany({
        include: {flashCards: true}
      });
    }
  }
}

const schema = createSchema({
  typeDefs,
  resolvers,
})

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}
export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
})
