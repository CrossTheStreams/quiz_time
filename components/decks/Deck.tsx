import { FlashCardDeck } from "@prisma/client"
import Dropdown from "../shared/Dropdown"
import { useState } from "react"
import TextInput from "../shared/TextInput"
import SmallButton from "../shared/SmallButton"
import TextArea from "../shared/TextArea"

type DeckProps = {
    deck: FlashCardDeck
}

const Deck = (props: DeckProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const { deck } = props;
  return (
    <div className="relative focus:outline-none">
      {
        isEditing ? (
            <DeckForm initialTitle={deck.title} initialDescription={deck.description} onCancel={() => setIsEditing(false)} />
          ) : (
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm font-semibold">
                <a href="#" className="hover:underline focus:outline-none">
                  {deck.title}
                </a>
              </h3>
              <Dropdown options={[
                  {text: "Edit", onClick: () => {
                    console.log("edit")
                    setIsEditing(true)
                  }},
                  {text: "Delete", onClick: () => {console.log("delete")}}
                ]}
             />
            </div>
            <p className="mt-1 text-sm line-clamp-2">{deck.description}</p>
          </div>
        )
      }
    </div>
  )
}

type DeckFormProps = {
  initialTitle: string
  initialDescription: string
  onCancel: Function
}

const DeckForm = (props: DeckFormProps) => {
  const { onCancel } = props
  const [title, setTitle] = useState(props.initialTitle)
  const [description, setDescription] = useState(props.initialDescription)
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }
  const handleSave = () => {
    console.log(title, description)
  }
  return (
    <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault() }>
      <TextInput id="title" name="title" label="Title" onChange={handleChangeTitle} value={title}/>
      <TextArea id="description" name="description" label="Description" onChange={handleChangeDescription} value={description}/>
      <div className="flex justify-end">
        <SmallButton label="Cancel" onClick={() => { onCancel() }} className="mt-2 ml-3" />
        <SmallButton label="Save" onClick={() => { handleSave() }} className="mt-2 ml-3"/>
      </div>
    </form>
  )
}

export default Deck
