import { useRouter } from 'next/router'

const fetcher = (query: string) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)

type Data = {
  decks: {
    title: string
  }[]
}

const Deck = ({ data }) => {
  const router = useRouter()
  const { id } = router.query

  return <p>Deck: {id}</p>
}

export async function getServerSideProps(context) {
  const query = context.query
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Deck