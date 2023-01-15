import useSWR from 'swr'
import DeckList from "../../components/DeckList"

const fetcher = (query: string) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => {
        console.log("foo")
        console.log(json.data)
        return json.data
    })

type Data = {
  allDecks: {
    id: number
    title: string 
    description: string
    createdAt: Date
    updatedAt: Date
  }[]
}

export default function Index() {
  const { data, error, isLoading } = useSWR<Data>(`{
    allDecks {
      id
      title
      description
      createdAt
      updatedAt
    }
  }`, fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) {
    console.log("nothing here")
  }

  const { allDecks } = data

  return (
    <>
      <div>
        <DeckList decks={allDecks}/>
      </div>
    </>
  )
}