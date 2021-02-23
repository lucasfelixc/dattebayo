import { useState, useEffect } from 'react'

import Header from './Components/Header'
import Main from './Components/Main'
import Bottom from './Components/Bottom'

import api from '../service/api'

import { Container } from '@styles/pages/Mangas'
import { Shadow } from '@styles/pages/Home'

const Mangas: React.FC = () => {
  const [mangas, setMangas] = useState([])

  const [title, setTitle] = useState('')
  const [idYoutube, setIdYoutube] = useState('')
  const [averagea, setAveragea] = useState('')
  const [age, setAge] = useState('')
  const [synopsis, setSynopsis] = useState('')

  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    api.get('/manga').then(response => {
      setMangas(response.data.data)
    })
  }, [])

  const creationDivShadow = (more: boolean) => {
    setShadow(more)
  }

  const handleShadowClick = () => {
    setShadow(!shadow)
  }

  const returnValues = (
    title: string,
    youtubeVideoId: string,
    average: string,
    age: string,
    synopsis: string
  ) => {
    setTitle(title)
    setIdYoutube(youtubeVideoId)
    setAveragea(average)
    setAge(age)
    setSynopsis(synopsis)
  }

  return (
    <Container>
      <Shadow show={shadow} onClick={handleShadowClick} />
      <Header />
      <Main arrContent={mangas} sendInfo={returnValues} />
      <Bottom
        title={title}
        youtubeVideoId={idYoutube}
        averageRating={averagea}
        ageRatingGuide={age}
        synopsis={synopsis}
        sendInfoDiv={creationDivShadow}
        receivedIndoDiv={shadow}
      />
    </Container>
  )
}

export default Mangas
