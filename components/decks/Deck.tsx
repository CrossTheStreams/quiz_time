import { FlashCardDeck } from "@prisma/client"
import Dropdown from "../shared/Dropdown"

type DeckProps = {
    deck: FlashCardDeck
}

const Deck = (props: DeckProps) => {
  const { deck } = props;
  return (
    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
      <div className="flex justify-between">
        <h3 className="text-sm font-semibold">
          <a href="#" className="hover:underline focus:outline-none">
            {/* Extend touch target to entire panel */}
            <span aria-hidden="true" />
            {deck.title}
          </a>
        </h3>
        <Dropdown options={[
            {text: "Edit", onClick: () => {console.log("edit")}},
            {text: "Delete", onClick: () => {console.log("delete")}}
          ]}
        />
      </div>
      <p className="mt-1 text-sm line-clamp-2">{deck.description}</p>
    </div>
  )
}

export default Deck
