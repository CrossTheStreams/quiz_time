import { FlashCardDeck } from "@prisma/client"
import Link from 'next/link'
import Deck from "./Deck"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/line-clamp'),
    ],
  }
  ```
*/
const decks = [
  {
    id: 1,
    title: 'A First Deck',
    description:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'A Second Deck',
    description:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  }
]

type DeckListProps = {
  decks: FlashCardDeck[]
}

export default function DeckList(props: DeckListProps) {
  const { decks } = props;
  return (
    <div className="mx-auto max-w-sm py-12 px-4 sm:px-0 md:py-16">
      <div className="mt-6 flow-root">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {
            decks.length === 0 ? (
              <h1 className="text-center">
                (No Decks Created Yet)
              </h1>
            ) : (
              decks.map((deck) => (
                <li key={deck.id} className="py-5">
                  <Deck deck={deck}/>
                </li>
              ))
            )
          }
        </ul>
      </div>
      <div className="mt-6">
        <Link
          href={"#"}
          onClick={() => console.log("foo")}
          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Add Deck + 
        </Link>
      </div>
    </div>
  )
}
