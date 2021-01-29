import { useEffect, useState } from 'react'

import { Container } from '../styles/pages/Home'

import Header from './Components/Header'
import Main from './Components/Main'
import Bottom from './Components/Bottom'

import api from '../service/api'

const Home: React.FC = () => {
  const [animes, setAnimes] = useState([])
  const [mangas, setMangas] = useState([])

  const average = []

  useEffect(() => {
    api.get('/anime').then(response => {
      setAnimes(response.data.data)
    })

    api.get('/manga').then(response => {
      setMangas(response.data.data)
    })
  }, [])

  const returnValues = (e: string) => {
    console.log(e)
  }

  animes.map(value => {
    return average.push(value)
  })

  mangas.map(value => {
    return average.push(value)
  })

  average.sort((a, b) => {
    return b.attributes.averageRating - a.attributes.averageRating
  })

  console.log(average)

  return (
    <Container>
      <Header />
      <div className="contentLine">
        <div className="line"></div>
      </div>
      <Main sendInfo={returnValues} arrContent={average.slice(0, 4)} />
      <Bottom />
    </Container>
  )
}

export default Home
